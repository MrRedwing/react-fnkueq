import React from 'react';

export class ChangePage extends React.Component {
  render() {
    return (
      <div id="arrows">
        <h2>{this.props.page+1}</h2>
        <p><i onClick={() => this.props.handleClick(-1)} class="arrow left"></i>    <i onClick={() => this.props.handleClick(1)} class="arrow right"></i></p>
      </div>
    );
  }
}
