import React from "react";
import './App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SectionView from './components/SectionView';

import metadata from './metadata.json';

const sectionsData = metadata.programs["1"].sections;
const section1Data = metadata.programs["1"].sections[0];

const getUrlFromSectionName = name => {
  return name.toLowerCase().replace(' ', '-');
}

function RoutedApp() {

  return (
    <Router>
      <div className="modern-health-app">

        <Route exact path="/" component={MainMenu} />
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

/*

<Route 
  exact path="/:section/:index" 
  render={props => <SectionView {...props} data={sectionsData} currentIndex={1} onReturn={() => {}} />} 
/>

*/


export default RoutedApp;
