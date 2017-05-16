import React from 'react';
import { Link } from 'react-router-dom';

import mobxify from './mobxify';

function TopBar({ uiStore }) {
  function withIsActive(className) {
    return uiStore.isMainNavActive ? `${className} is-active` : className;
  }

  return (
    <nav className="nav has-shadow">
      <div className="container">
        <div className="nav-left">
          <Link
            to="/"
            className="nav-item"
            onClick={() => uiStore.setMainNavActive(false)}
          >
            RPSK
          </Link>
          <Link
            to="/posts"
            className="nav-item is-hidden-mobile"
          >
            Posts
          </Link>
        </div>
        <span
          className={withIsActive('nav-toggle')}
          onClick={uiStore.toggleMainNavActive}>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className={withIsActive("nav-right nav-menu")}>
          <Link
            to="/posts"
            className="nav-item is-hidden-tablet"
            onClick={uiStore.toggleMainNavActive}
          >
            Posts
          </Link>
          <Link
            to="/my_account"
            className="nav-item"
            onClick={uiStore.toggleMainNavActive}
          >
            <span className="icon">
              <i className="fa fa-user-circle"></i>
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default mobxify('uiStore')(TopBar);
