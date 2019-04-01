import React from "react";
import '../styles/App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SectionView from './components/SectionView';
import SectionCard from './components/SectionCard';
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
        <Program data={metadata.programs[programId]} key={programId} programId={programId} />
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
          const link = `/${props.programId}/${hashedSectionName}`;
          return (
            <Link 
              to={`${link}/0`} 
              key={link}
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
