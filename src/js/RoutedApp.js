import React from "react";
import '../styles/App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SectionView from './components/SectionView';
import SectionCard from './components/SectionCard';
import metadata from '../metadata.json';

// TODO: move to helper file, and also sanitize special characters
const getHashFromSectionName = name => {
  return name.toLowerCase().replace(' ', '-');
};

const getSectionDataFromHash = hash => {
  // Todo Hardcoded
  return metadata.programs["1"].sections.find(sectionData => getHashFromSectionName(sectionData.name) === hash);
};

const renderSection = (props) => {
  // localhost:3000/1/mindfulness/0

  return (
    <SectionView {...props} data={getSectionDataFromHash(props.match.params.section)} programId={props.match.params.programId} />
  );
};

function RoutedApp() {

  return (
    <Router>
      <div className="modern-health-app">

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

function MainMenu() {
  return (
    <div>
      {Object.keys(metadata.programs).map(programId => (
        <Program data={metadata.programs[programId]} key={programId} />
      ))}
    </div>
  );
}

function Program(props) {
  return (
    <div className="program-preview">
      <h1>{props.data.name}</h1>

      <a href="/">Learn More</a>

      <div className="sections">

        {props.data.sections.map(section => {
          const hashedSectionName = getHashFromSectionName(section.name);
          return (
            <Link 
              to={`/1/${hashedSectionName}/0`} 
              key={`/1/${hashedSectionName}`}
            >
              <SectionCard data={section} />
            </Link>
          );
          
        })}

      </div>
    </div>
  );
}


export default RoutedApp;
