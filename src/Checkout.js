import React from 'react';

export class Checkout extends React.Component {
  constructor(props){
    super(props);
    
    this.sum = this.sum.bind(this);

    this.state = {
      total: this.sum()
    };
  }
  sum(){
    let amount = 0;
    for (let i = 0; i < this.props.cart.length; i++){
      amount += this.props.cart[i]["price"];
    }
    return amount;
  }
  render() {
    return (
      <div className="subheader">
        <h1>Items in Cart</h1>
        <table id="checkout">
          <tr>
            <th><h2>Qt</h2></th>
            <th><h2>Item</h2></th>
            <th><h2>Price</h2></th>
          </tr>
          {this.props.cart.length > 0 ?
            this.props.cart.map((item, index) => <tr>
                <td>{item["amount"]}</td>
                <td key={index+"td1"}>
                  <p>{item["name"]} <button className="upper" onClick={() => {this.props.handleCart(item, false); this.setState({total: this.sum()})}} title="Remove from cart">-</button></p>
                  <img src={item["img src"]} />
                </td>
                <td key={index+"td2"}><p>${item["price"]}</p></td>
            </tr>) :
            <tr>
              <td></td>
              <td>
                <h1 title="Go to Homepage" style={{cursor: "pointer"}} onClick={() => document.getElementById('banner_Home').click()}>Add items to cart</h1>
              </td>
              <td>
                <p>$0.00</p>
              </td>
            </tr>
          }
          <tr>
            <td>{this.props.cart.length}</td>
            <td><br /><br /><br /><br />Total price<br /><br /><br /><br /></td>
            <td>${this.state.total.toFixed(2)}</td>
          </tr>
        </table>
      </div>
    );
  }
}
