import React, { useState } from 'react';

import { Card } from './Card.js';
import { ChangePage } from './ChangePage.js';

import './style.css';

export function App(props) {
  let items = props.items;
  const itemsPerPage = 8;

  const [item, setItem] = useState('Select an Item');
  const [price, setPrice] = useState(0);
  const [page, setPage] = useState(0);

  function handleItemClicked(value) {
    setItem(value['name']);
    setPrice(value['price']);
  }

  function handleChange(value) {
    //Checks to make sure change value is positive and next page has items
    if (
      items.slice((page + 1) * itemsPerPage, (page + 2) * itemsPerPage)
        .length != 0 &&
      value > 0
    ) {
      setPage(page + 1);
      //Makes sure current page isn't the first page. Can't go to a -1 page
    } else if (page != 0 && value < 0) {
      setPage(page - 1);
    }
  }
  return (
    <div>
      <div className="text-center mt-3">
        <h1>Welcome to the Store!</h1>
      </div>
      <div className="row m-1 justify-content-start">
        {items
          .slice(page * itemsPerPage, (page + 1) * itemsPerPage)
          .map((item, index) => (
            <div className="mx-auto col-8 col-sm-6 col-md-4 col-lg-4">
              <Card
                handleCart={props.handleCart}
                handleClick={handleItemClicked}
                key={'item' + (page * itemsPerPage + index)}
                item={item}
              />
            </div>
          ))}
      </div>
      <ChangePage page={page} handleClick={handleChange} />
    </div>
  );
}
