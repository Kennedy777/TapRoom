import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import failcat from '../assets/failcat.jpeg';

function Error(props){
  return (
    <div>
      <style jsx>{`
        html {
          background: url(../assets/images/failcat.jpg) no-repeat center center fixed;
          -webkit-background-size: cover;
          -moz-background-size: cover;
          -o-background-size: cover;
          background-size: cover;
        }
        body{
          text-align: center;
        }
        a {
          color: #000;
          font-weight: bold;
        }
      `}</style>
      <h2>D'oh! {props.location.pathname} not found </h2>
      <p>Return <Link to="/">home</Link></p>
    </div>
  );
}

Error.propTypes = {
  location: PropTypes.object
};

export default Error;
