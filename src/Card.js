import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Card (props) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/Item/"+props.item["id"])} type="button"
      className="card h mx-auto text-center mx-3 mb-3 p-0 w-100"
      title={props.item['name']}
    >
      <img
        style={{"object-fit": "cover"}, {"height": 18+"rem"}}
        className="card-img img-responsive"
        title={props.item['name']}
        alt={props.item['name']}
        src={props.item['img src']}
      />
      <div className="card-body p-0 pt-3">
        <h3 classsName="card-title" style={{"overflow":"auto"}, {"white-space": "nowrap"}}>
          {props.item['name'].length < 18
            ? props.item['name']
            : props.item['name'].slice(0, 15) + '...'}{' '}
          {/* <button
            className="btn btn-primary"
            onClick={() => this.props.handleCart(this.props.item, true)}
            title="Add to cart"
          >
            +
          </button> */}
        </h3>
        <p className="card-subtitle mb-2 text-muted">
          ${props.item['price'].toFixed(2)}
        </p>
      </div>
    </div>
  );
}
