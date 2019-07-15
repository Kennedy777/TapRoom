import React from 'react'; 
import ginger-and-fred from '../assets/ginger-and-fred.jpeg';

const dancerImg = {
  backgroundImage: `url(${ginger-and-fred})`
};

function Body() {
  return (
    <div>
      <style jsx>{`
      
        .ginger-and-fred {
           height: 75vh;
           color: #fff;
           background-size: cover;
           display: flex;
           align-items: center;
           flex-direction: column;
      }
       `}</style>
      <div> 
      <div className="main" style={ginger-and-fredImg}>
        <h2>Tap Dance Brewery</h2>
        <div className="about">
        </div>
      </div>
    </div>
    </div>
  );
} 

export default Body; 