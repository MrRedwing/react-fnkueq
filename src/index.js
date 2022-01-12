import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { App } from './App.js';
import { About } from './About.js';
import { Item } from './Item.js';
import { Header } from './Header.js';
import { Footer } from './Footer.js';
import { Contact } from './Contact.js';
import { Checkout } from './Checkout.js';
import { Unknown } from './Unknown.js';

const categories = ['Home', 'About', 'Contact', 'View Cart'];

//Import items list
import * as data from './data.json';
const items = data['items'];

function Index (props){
  const initialPath = window.location.pathname.replace('/', '').replace('%20', ' ');
  const [input, setInput] = useState("");
  const [cart, setCart] = useState([]);

  function handleCart(value, add) {
    let newCart = cart;
    if (add) {
      newCart.push(value);
    } else {
      let index = newCart.indexOf(value);
      if (index == -1) {
        return;
      }
      newCart.splice(index, 1);
    }
    setCart(newCart);
  }

  return (
    <Router>
      {/* <h1>{JSON.stringify(this.state.cart)}</h1> */}
      <Header categories={categories} />
      <Routes>
        <Route
          exact
          path="/Home"
          element={<App items={items} handleCart={handleCart} />}
        />
        <Route
          exact
          path="/"
          element={<App items={items} handleCart={handleCart} />}
        />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route
          exact
          path="/View%20Cart"
          element={
            <Checkout cart={cart} handleCart={handleCart} />
          }
        />
        <Route
          path="/Item/:id"
          element={
            <Item handleCart={handleCart} items={items}/>
          }
        />
        <Route path="*" element={<Unknown />} />
      </Routes>
      <div className="mt-5">
        <Footer type="footer" categories={categories}>
          {['More Information', new Date().getFullYear()]}
        </Footer>
      </div>
    </Router>
  );
}

ReactDOM.render(<Index />, document.getElementById('app'));
