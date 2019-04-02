import React from "react";
import '../styles/App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Program from './components/Program';
import SectionView from './components/SectionView';
import Modal from 'react-modal';
import metadata from '../metadata.json';
import { getSectionDataFromHash } from './helpers';


const renderSection = (props) => {
  const params = props.match.params;
  return (
    <SectionView 
      {...props} 
      data={getSectionDataFromHash(params.programId, props.match.params.section, metadata)} 
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
          render={(renderSection)} 
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
  const [ activeModalId, setActiveModalId ] = React.useState(null);
  const modalStyle = {
    overlay: {
      backgroundColor: 'rgba(128, 128, 128, 0.8)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: "30%",
      width: "50%",
    },
  };

  return (
    <div className="main-menu">
      {Object.keys(metadata.programs).map(programId => (
        <section className="program-section">
          <Modal 
            isOpen={activeModalId === programId}
            onRequestClose={() => setActiveModalId(null)}
            style={modalStyle}
          >
            <h1>{metadata.programs[programId].name}</h1>
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


Modal.setAppElement('#root');

export default RoutedApp;
