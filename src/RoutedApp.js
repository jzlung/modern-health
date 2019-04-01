import React from "react";
import './styles/App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SectionView from './js/components/SectionView';
import SectionCard from './js/components/SectionCard';

import metadata from './metadata.json';

const sectionsData = metadata.programs["1"].sections;
const section1Data = metadata.programs["1"].sections[0];

// TODO: move to helper file, and also sanitize special characters
const getUrlFromSectionName = name => {
  return name.toLowerCase().replace(' ', '-');
}

function RoutedApp() {

  return (
    <Router>
      <div className="modern-health-app">

        <Route exact path="/" render={props => <Program {...props} data={metadata.programs["1"]} />} />
        <Route 
          exact path="/:section" 
          render={props => <SectionView {...props} data={sectionsData} currentIndex={1} onReturn={() => {}} />} 
        />
        <Route 
          path="/:section/:index"
          render={props => <SectionView {...props} data={sectionsData} currentIndex={1} onReturn={() => {}} />} 
        />
      </div>
    </Router>
  );
}

function MainMenu() {
  return (
    <Link to={`/${getUrlFromSectionName(section1Data.name)}`} >
      {section1Data.name}
    </Link>
  );
}

function Program(props) {
  return (
    <div className="program-preview">
      <h1>{props.data.name}</h1>

      <a href="#">Learn More</a>

      <div className="sections">

        {props.data.sections.map((section, sectionIndex) => {
          return (
            <Link to={`/${getUrlFromSectionName(section1Data.name)}/${sectionIndex}`} >
              <SectionCard data={section} />
            </Link>
          );
          
        })}

      </div>
    </div>
  );
}

/*

<Route 
  exact path="/:section/:index" 
  render={props => <SectionView {...props} data={sectionsData} currentIndex={1} onReturn={() => {}} />} 
/>

*/


export default RoutedApp;
