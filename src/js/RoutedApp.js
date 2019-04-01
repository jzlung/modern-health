import React from "react";
import '../styles/App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SectionView from './components/SectionView';
import SectionCard from './components/SectionCard';
import Modal from 'react-modal';
import metadata from '../metadata.json';

// TODO: move to helper file, and also sanitize special characters
const getHashFromSectionName = name => {
  return name.toLowerCase().split('').filter(char => /[a-z ]/.test(char)).join('').replace(/ /g, '-');
};

const getSectionDataFromHash = (program, hash) => {
  // Todo Hardcoded
  return metadata.programs[program].sections.find(sectionData => getHashFromSectionName(sectionData.name) === hash);
};

const renderSection = (props) => {
  const params = props.match.params;
  return (
    <SectionView 
      {...props} 
      data={getSectionDataFromHash(params.programId, props.match.params.section)} 
      programId={params.programId} 
    />
  );
};

function RoutedApp() {

  return (
    <Router>
      <div className="modern-health-app" id="app">

        <Route exact path="/" component={MainMenu} />
        <Route 
          exact path="/:programId/:section" 
          render={renderSection} 
        />
        <Route 
          path="/:programId/:section/:index"
          render={renderSection} 
        />
      </div>
    </Router>
  );
}

Modal.setAppElement('#root');

function MainMenu() {
  const [ activeModalId, setActiveModalId ] = React.useState(null);

  return (
    <div className="main-menu">
      {Object.keys(metadata.programs).map(programId => (
        <section className="program-section">
          <Modal 
            isOpen={activeModalId === programId}
            onRequestClose={() => setActiveModalId(null)}
          >
            {metadata.programs[programId].description}
          </Modal>
          <Program 
            data={metadata.programs[programId]} 
            key={programId} 
            programId={programId} 
            triggerModal={() => setActiveModalId(programId)} 
          />
        </section>
      ))}
    </div>
  );
}

function Program(props) {
  // TODO: style the button as link

  return (
    <div className="program-preview">
      <h1>{props.data.name}</h1>

      <button onClick={props.triggerModal}>Learn More</button>

      <div className="sections">

        {props.data.sections.map(section => {
          const hashedSectionName = getHashFromSectionName(section.name);
          const link = `/${props.programId}/${hashedSectionName}`;
          return (
            <Link 
              to={`${link}/0`} 
              key={link}
            >
              <SectionCard data={section} programId={props.programId} />
            </Link>
          );
          
        })}

      </div>
    </div>
  );
}


export default RoutedApp;
