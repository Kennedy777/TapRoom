import React from 'react';
import { Link } from 'react-router-dom';
import title from '../assets/tap-dance.jpg';

function Header() {
  return (
    <div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-left: 30px;
          padding-right: 30px;
        }
        .nav a{
          font-size: 15px;
          text-decoration: none;
          color: #000;
        }
        .nav a:hover {
          text-decoration: underline;
        }

    `}</style>
      <div className="container">
        <img src={title} className="logo"></img>
        <div className="nav">
          <Link to="/">Tap Back</Link> | <Link to="/keglist">Our Kegs</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
