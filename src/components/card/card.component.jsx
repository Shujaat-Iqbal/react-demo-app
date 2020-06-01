// React Import
import React from 'react';

// Styles Import
import './card.styles.css'

export const Card = props => (
  <div className='card-container'>
    <img alt={props.monster.name} src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}></img>
    <h2>{ props.monster.name }</h2>
    <p>{ props.monster.email }</p>
  </div>
);