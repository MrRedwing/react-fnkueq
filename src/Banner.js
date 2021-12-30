import React from 'react';

const categories = ['Home', 'About', 'Contact', 'View Cart'];

export class Banner extends React.Component {
  render(){
    return(
      <div id={this.props.type}>
        <p>{this.props.children}</p>
        <table>
        <tr>
          {categories.map((category) => <td id={this.props.type+'_'+category} onClick={() => this.props.handleInput(category)}>{category}</td>)}
        </tr>
        </table>
      </div>
    )
  }
}