import React from 'react';

export class Card extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div onClick={() => this.props.handleClick(this.props.item)} className="card" title={this.props.item["name"]}>
        <div className="upper">
          <h3>{this.props.item["name"].length < 18 ? this.props.item["name"] : this.props.item["name"].slice(0,15)+"..."} <button onClick={() => this.props.handleCart(this.props.item, true)} title="Add to cart">+</button></h3>
        </div>
        <p>${this.props.item["price"].toFixed(2)}</p>
        <img title={this.props.item["name"]} alt={this.props.item["name"]} src={this.props.item["img src"]} />
      </div>
    );
  }
}