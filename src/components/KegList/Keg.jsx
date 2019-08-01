import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  const showKeg =
  <div>
  <style jsx>{`
        .keg {
          border: 1px solid #000;
          text-align: center;
          width: 500px;
          height: 500px;
          background-color: #fff;
          margin: 10px;
        }
        .kegimg {
          overflow: hidden;
          height: 70%;
        }
        .kegimg img{
          width: 100%;
        }
        ul {
          text-align: left;
        }
        .keg-header {
          text-align: center;
          margin-right: 30px;
        }
    `}</style>
      <div className="kegcontainer">
        <div className="keg">
          <div className="kegimg">
            <img src={props.image}/>
          </div>
          <h3>{props.name}, {props.brand}</h3>
          <ul>
            <li>${props.price} per pint!</li>
            <li>{props.alcoholContent}% <em>Alcohol Content</em></li>
          </ul>
        </div>
      </div>
    </div>;
  if (props.currentRouterPath === '/admin'){
    return (
      <div className="keg-header">
        <button href="#/editkeg" style={style} label="Edit" />
        <button href="#/sellpint" style={style} label="Sell Pint" />
        <button onClick={() => {props.onKegSelection({name: props.name, brand: props.brand, price: props.price, alcoholContent: props.alcoholContent, image: props.image});}} style={style} label="Delete (X)" />
        {kegDisplay}
      </div>
    );
  }else{
    return (
      <div>
        {kegDisplay}
      </div>
    );
  }
}
Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  aBV: PropTypes.string,
  image: PropTypes.string,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func
};

export default Keg;
