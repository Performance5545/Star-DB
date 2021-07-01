import React from 'react';
import SwapiService from '../../services/swapi-service';
import withData from '../hoc-helpers';

import './item-list.css';

const ItemList = ({ data, onItemSelected, children: renderLabel }) => {

  const items = data.map((item) => {

    const { id } = item;

    return (
      <li className="list-group-item"
          key={ id }
          onClick={() => onItemSelected(id)}>
        { renderLabel(item) }
      </li>
    );
  });

  return (
    <ul className="item-list list-group">
      { items }
    </ul>
  );
}

const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople);