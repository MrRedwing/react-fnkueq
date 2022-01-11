import React from 'react';
import { Link } from 'react-router-dom';

export function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <button
          className="navbar-toggler ms-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#header"
          aria-controls="header"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="header" className="collapse navbar-collapse">
          <ul className="navbar-nav nav-fill w-100">
            {props.categories.map((category, index) => (
              <li key={"header"+category+index}className="nav-item ms-3">
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
