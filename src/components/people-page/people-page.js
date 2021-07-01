import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import ErrorBoundary from '../error-boundary';
import Row from '../row'
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Record from '../record/record';

import './people-page.css';

export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: null,
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {

    const itemList = (
      <ItemList getData={ this.swapiService.getAllPeople } 
                onItemSelected={ this.onPersonSelected } >
        { (item) => item.name } 
      </ItemList>
    );

    const personDetails = (
      <ItemDetails itemId={ this.state.selectedPerson } getData={ this.swapiService.getPerson } getImageUrl={ this.swapiService.getPersonImage }>
        <Record field="birthYear" label="Birth Year"/>
        <Record field="gender" label="Gender"/>
        <Record field="eyeColor" label="Eye Color"/>
      </ItemDetails>
    );
 
    return (
      <ErrorBoundary>
        <Row left={ itemList } right={ personDetails } />
      </ErrorBoundary>
    );
  } 
};