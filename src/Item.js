import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export function Item (props){
  const { id } = useParams();
  const navigate = useNavigate();

  const item = props.items.find(item => item.id == id)
  return (
    <div className="p-3">
      <div className="row">
      <div className="col-6">
          <button onClick={() => navigate("/Home")} className="border-0 bg-transparent"><svg xmlns="http://www.w3.org/2000/svg" width="128" height="32" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg></button>
          <img className="img-thumbnail mt-3 w-100" src={item["img src"]} />
        </div>
        <div className="text-center col-6 my-auto">
          <h1>{item["name"]}</h1>
          <h3 className="text-muted">${item["price"]}</h3>
          <button onClick={() => props.handleCart(item, 1)} className="border-0 btn-primary rounded mb-3 p-2">Add to Cart</button>
          <p>{item["amount"]}</p>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
