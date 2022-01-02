import React from 'react';
import { Link } from 'react-router-dom';

const categories = ['Home', 'About', 'Contact', 'View Cart'];

export class Banner extends React.Component {
  constructor(props){
    super(props);
    
    this.handleChildren = this.handleChildren.bind(this);
  }
  handleChildren(children){
    let type = typeof children;
    if (type == "undefined"){
      return;
    } else if (type == "string"){
      return <p>{children}</p>;
    } else if (type == "object"){
      return children.map((child) => <p>{child}</p>);
    }
  }
  render(){
    return(
      <div id={this.props.type}>
        {this.handleChildren(this.props.children)}
        <table>
        <tr>
          {categories.map((category) => <td id={this.props.type+'_'+category} onClick={() => document.getElementById(this.props.type+'_'+category+'_link').click()}><Link id={this.props.type+'_'+category+'_link'} to={'/'+category}>{category}</Link></td>)}
        </tr>
        </table>
      </div>
    )
  }
}