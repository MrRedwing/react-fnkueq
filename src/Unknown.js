import React from 'react';
import { Link } from 'react-router-dom';

export class Unknown extends React.Component {
  render(){
    return(
      <div className="subheader">
        <h1>404 No Page by that Name</h1>
        <Link to="/Home">Link to the Homepage</Link>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    );
  }
}