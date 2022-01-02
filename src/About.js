import React from 'react';

export class About extends React.Component {
  render() {
    return (
      <div className="subheader">
        <h1>
          This buys items from Alibaba and AliExpress and ships it straight to
          your door
        </h1>
        <p>
          This is a drop shipping site from China. Learn more about Alibaba and
          AliExpress at the links below
        </p>
        <a
          className="link"
          href="https://www.ecommerceceo.com/alibaba-vs-aliexpress/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link here{' '}
        </a>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    );
  }
}
