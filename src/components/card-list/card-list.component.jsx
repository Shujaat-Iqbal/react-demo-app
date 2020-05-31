import React from 'react';

// Styles Import
import './card-list.styles.css'

export const CardList = props => {
  return(
    <div className="card-list">
      {props.children}
    </div>
  )
};