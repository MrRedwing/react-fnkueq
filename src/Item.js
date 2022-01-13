import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import * as data from './data.json';


export function Item(props) {
  const items = data['items'];

  const navigate = useNavigate();
  const { id } = useParams();

  const item = items[id-1];

  return (
    <div className="p-3">
      <div className="row">
        <div className="d-grid col-6 col-lg-4 col-md-4">
          <button
            onClick={() => navigate('/Home')}
            className="me-auto border-0 bg-transparent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="128"
              height="32"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </button>
          <img className="img-thumbnail mt-3 mx-auto" src={item['img src']} />
        </div>
        <div className="col-6 col-md-8 col-lg-8 my-auto">
          <div className="text-center me-auto">
            <h1>{item['name']}</h1>
            <h3 className="text-muted">${item['price']}</h3>
            <button
              onClick={() => props.handleCart(item, 1)}
              className="border-0 btn-primary rounded mb-3 p-2"
            >
              Add to Cart
            </button>
            <p>{item['amount']}</p>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
