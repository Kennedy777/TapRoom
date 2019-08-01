import React from 'react';
import hero from '../assets/hero1.jpeg';
import FlatButton from 'material-ui/FlatButton';

const heroImage = {
  backgroundImage: `url(${hero})`
};

function Body() {
  return (
    <div>
      <style jsx>{`
        .hero {
          height: 75vh;
          color: #fff;
          background-size: cover;
          display: flex;
          align-items: center;
          flex-direction: column;
        }
        .who {
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 15px;
          border: 1px solid #fff;
          background-color: #030d1e61;
          width: 500px;
          margin: 20px;
          height: 100px;
          text-align: center;
        }
    `}</style>
      <div>
        <div className="hero" style={heroImage}>
          <h3>Welcome to Tap Dance Brewery!</h3>
          <div className="who">
            <FlatButton href="#/admin" backgroundColor="#fff" hoverColor="#cece" label="Employee" />
            <FlatButton href="#/keglist" backgroundColor="#fff" hoverColor="#cece" label="Patron" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
