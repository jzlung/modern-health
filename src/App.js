import React, { Component } from 'react';
import './App.scss';

import metadata from './metadata.json';
import ProgramPreview from './components/ProgramPreview.jsx';
import SectionView from './components/SectionView.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    console.log(metadata);
    this.state = {
      // Normally this might be an AJAX call in componentDidMount, but data is local in this app
      data: metadata,
      activeView: {
        type: "section",
        programId: "1",
        sectionIndex: 2, 
      },
    };
  }
  
  renderProgramPreviews = () => {
    if (this.state.data.programs) {

      const programs = Object.keys(this.state.data.programs)
        // .map(key => this.state.data.programs[key]);
        .map(key => (
          <ProgramPreview 
            data={this.state.data.programs[key]} 
            programId={key} 
            onSectionClick={this.handleSectionClick} 
          />
        ))

      return (
        <div className="program-previews">
          {programs}
        </div>
      );
    }
  };

  renderMainApp = () => {
    return (
      <div className="container">
        <header>
          Self Help Programs Overview
        </header>

        {this.renderProgramPreviews()}

        <pre>
          {JSON.stringify(metadata, null, 2)}
        </pre>
      </div>
    );
  }

  handleReturn = () => {
    this.setState({
      activeView: { type: "main" },
    })
  }

  handleSectionClick = (programId, sectionIndex) => {
    this.setState({
      activeView: { 
        type: "section",
        programId: programId,
        sectionIndex: sectionIndex,
      },
    })
  }

  renderSection = (programId, sectionIndex) => {
    return (
      <SectionView 
        data={this.state.data.programs[programId].sections} 
        onReturn={this.handleReturn}
        index={sectionIndex}
      />
    );
  }

  render() {
    const { programId, sectionIndex } = this.state.activeView;
    return (
      <div className="modern-health-app">

        {this.state.activeView.type === "main"
          ? this.renderMainApp()
          : this.renderSection(programId, sectionIndex)
        }

      </div>
    );
  }
}

export default App;
