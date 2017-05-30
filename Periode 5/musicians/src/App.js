import React, { Component } from 'react';
import './App.css';
import MusiciansPresenter from './components/musicians_presenter';
import musicians from './components/musicians';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <MusiciansPresenter data={musicians} />
      </div>
    );
  }
}

export default App;
