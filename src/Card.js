import React from 'react';

export class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        onClick={() => this.props.handleClick(this.props.item)}
        className="card text-center ml-3 w-100 h-100"
        style={{ width: 15 + 'rem' }}
        title={this.props.item['name']}
      >
        <img
          className="card-img-top img-responsive"
          title={this.props.item['name']}
          alt={this.props.item['name']}
          src={this.props.item['img src']}
        />
        <div className="card-body">
          <h3 classsName="card-title">
            {this.props.item['name'].length < 18
              ? this.props.item['name']
              : this.props.item['name'].slice(0, 15) + '...'}{' '}
            <button
              className="btn btn-primary"
              onClick={() => this.props.handleCart(this.props.item, true)}
              title="Add to cart"
            >
              +
            </button>
          </h3>
          <p className="card-subtitle mb-2 text-muted">
            ${this.props.item['price'].toFixed(2)}
          </p>
        </div>
      </div>
    );
  }
}
