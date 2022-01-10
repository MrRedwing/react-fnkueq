import React from 'react';
import { Link } from 'react-router-dom';

export function Footer(props) {
  const handleChildren = (children) => {
    let type = typeof children;
    if (type == 'undefined') {
      return;
    } else if (type == 'string') {
      return <p className="text-center">{children}</p>;
    } else if (type == 'object') {
      return children.map((child) => <p className="text-center">{child}</p>);
    }
  }
  return (
    <div>
      {handleChildren(props.children)}
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav nav-fill w-100">
            {props.categories.map((category) => (
              <li className="nav-item ms-3">
                <Link className="nav-link" to={'/' + category}>
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
