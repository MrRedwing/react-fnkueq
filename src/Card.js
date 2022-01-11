import React from 'react';

export class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        onClick={() => this.props.handleClick(this.props.item)}
        className="card h mx-auto text-center mx-3 mb-3 p-0 w-100"
        title={this.props.item['name']}
      >
        <img
          style={{"object-fit": "cover"}, {"height": 18+"rem"}}
          className="card-img img-responsive"
          title={this.props.item['name']}
          alt={this.props.item['name']}
          src={this.props.item['img src']}
        />
        <div className="card-body p-0 pt-3">
          <h3 classsName="card-title" style={{"overflow":"auto"}, {"white-space": "nowrap"}}>
            {this.props.item['name'].length < 18
              ? this.props.item['name']
              : this.props.item['name'].slice(0, 15) + '...'}{' '}
            {/* <button
              className="btn btn-primary"
              onClick={() => this.props.handleCart(this.props.item, true)}
              title="Add to cart"
            >
              +
            </button> */}
          </h3>
          <p className="card-subtitle mb-2 text-muted">
            ${this.props.item['price'].toFixed(2)}
          </p>
        </div>
      </div>
    );
  }
}
