import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import { About } from './About.js';
import { Banner } from './Banner.js';
import { Contact } from './Contact.js';
import { Checkout } from './Checkout.js';
import { Unknown } from './Unknown.js';

//Import items list
import * as data from './data.json';
const items = data["items"];

class Index extends React.Component {
  constructor(props) {
    super(props);
    const initialPath = window.location.pathname.replace('/', '').replace('%20', ' ');
    this.state = {
      input: initialPath,
      cart: [],
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleCart = this.handleCart.bind(this);
    
    this.state["page"] = this.handleInput(initialPath);
  }
  handleCart(value, add){
    let newCart = this.state.cart;
    if(add){
      newCart.push(value);
    }else{
      let index = newCart.indexOf(value);
      if (index == -1){
        return; 
      }
      newCart.splice(index, 1);
      this.setState({page: <Checkout cart={this.state.cart} handleCart={this.handleCart}/>});
    }
    this.setState({cart: newCart});
  }
  handleInput(value) {
    const state = { page_id: 1 };
    const title = value;
    const url = value;

    history.pushState(state, title, url);

    let newPage;

    if (value == 'Home' || value == '') {
      newPage = <App items={items} handleCart={this.handleCart}/>;
    } else if (value == 'About') {
      newPage = <About />;
    } else if (value == 'Contact') {
      newPage = <Contact />;
    } else if (value == 'Checkout' || value == 'View Cart'){
      newPage = <Checkout cart={this.state.cart} handleCart={this.handleCart}/>
    } else {
      newPage = <Unknown />;
    }
    this.setState({ input: value, page: newPage });
    return newPage;
  }
  render() {
    return (
      <div>
        {/* <h1>{JSON.stringify(this.state.cart)}</h1> */}
        <Banner type="banner" handleInput={this.handleInput} />
        {this.state.page}
        <Banner type="footer" handleInput={this.handleInput}>More Information</Banner>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('app'));
