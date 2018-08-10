import React, { Component } from 'react';
import FilterProjects from './components/FilterProjects'
import ShowHideTech from './components/ShowHideTech';

class App extends Component {
  render() {
    return (
      <div className="App" id="app-container">
        < ShowHideTech />
        < FilterProjects />
      </div>
    );
  }
}

export default App;
