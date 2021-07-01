import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ErrorBoundary from '../error-boundary';

import './app.css';

export default class App extends Component {

  state = {
    showRandomPlanet: true
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {

    const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

    return (
      <ErrorBoundary>
        <div className="stardb-app">
          <Header />
          { planet }

          <PeoplePage />

        </div>
      </ErrorBoundary>
    );
  }
}