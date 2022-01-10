import React from 'react';

import { Card } from './Card.js';
import { ChangePage } from './ChangePage.js';

import './style.css';

const itemsPerPage = 8;

export class App extends React.Component {
  constructor(props){
    super(props);

    this.items = this.props.items;

    this.state = {
      item: 'Select an Item',
      price: 0,
      page: 0
    }
    this.handleItemClicked = this.handleItemClicked.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleItemClicked(value){
    this.setState({item: value['name'], price: value['price']})
    //window.location.href = 'https://react-fnkueq.stackblitz.io/' + value;
  }
  handleChange(value){
    //Checks to make sure change value is positive and next page has items
    if((this.items.slice((this.state.page+1)*itemsPerPage, (this.state.page+2)*itemsPerPage).length != 0) && value > 0){
      this.setState({page: this.state.page+1});
    //Makes sure current page isn't the first page. Can't go to a -1 page
    } else if (this.state.page != 0 && value < 0){
      this.setState({page: this.state.page-1});
    }
  }
  render() {
    return (
      <div>
        <div className="text-center mt-3">
          <h1>Welcome to the Store!</h1>
          <h2>Item selected: {this.state.item}</h2>
          <h3>Price: ${this.state.price}</h3>
        </div>
        <div className="row justify-content-start">
          {this.items.slice(this.state.page*itemsPerPage, (this.state.page+1)*itemsPerPage).map((item, index) => <div className="col-xs-5 col-sm-4 col-lg-3"><Card handleCart={this.props.handleCart} handleClick={this.handleItemClicked} key={"item"+(this.state.page*itemsPerPage+index)} item={item} /></div>)}
        </div>
        <ChangePage page={this.state.page} handleClick={this.handleChange}/>
      </div>
    );
  }
}
