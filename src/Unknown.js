import React from 'react';

export class Unknown extends React.Component {
  render(){
    return(
      <div className="subheader">
        <h1>404 No Page by that Name</h1>
        <a href="javascript:void(0);" onClick={() => document.getElementById('banner_Home').click()}>Link to the Homepage</a>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    );
  }
}