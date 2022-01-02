import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { App } from './App';
import { About } from './About.js';
import { Banner } from './Banner.js';
import { Contact } from './Contact.js';
import { Checkout } from './Checkout.js';
import { Unknown } from './Unknown.js';

//Import items list
import * as data from './data.json';
const items = data['items'];

class Index extends React.Component {
  constructor(props) {
    super(props);
    const initialPath = window.location.pathname
      .replace('/', '')
      .replace('%20', ' ');
    this.state = {
      input: initialPath,
      cart: [],
    };

    this.handleCart = this.handleCart.bind(this);
  }
  handleCart(value, add) {
    let newCart = this.state.cart;
    if (add) {
      newCart.push(value);
    } else {
      let index = newCart.indexOf(value);
      if (index == -1) {
        return;
      }
      newCart.splice(index, 1);
      this.setState({
        page: <Checkout cart={this.state.cart} handleCart={this.handleCart} />,
      });
    }
    this.setState({ cart: newCart });
  }
  render() {
    return (
      <Router>
        {/* <h1>{JSON.stringify(this.state.cart)}</h1> */}
        <Banner type="banner" />
        <Routes>
          <Route
            exact
            path="/Home"
            element={<App items={items} handleCart={this.handleCart} />}
          />
          <Route
            exact
            path="/"
            element={<App items={items} handleCart={this.handleCart} />}
          />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route
            exact
            path="/View%20Cart"
            element={
              <Checkout cart={this.state.cart} handleCart={this.handleCart} />
            }
          />
          <Route path="*" element={<Unknown />} />
        </Routes>
        <Banner type="footer">{["More Information",(new Date).getFullYear()]}</Banner>
      </Router>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('app'));
