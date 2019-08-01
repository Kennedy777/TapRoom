import React from 'react'; 
import ginger from '../assets/ginger-and-fred.jpeg';

const dancerImg = {
  backgroundImage: `url(${ginger})`
};

function Body() {
  return (
    <div>
      <style jsx>{`
        .main {
           height: 75vh;
           color: #fff;
           background-size: cover;
           display: flex;
           align-items: center;
           flex-direction: column;
         }
         .links {
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 20px;
          border: 1px solid #fff;
          background-color: #grey;
          width: 500px;
          margin: 20px;
          height: 100px;
          text-align: center;
        }
       `}</style>
      <div> 
      <div className="main" style={dancerImg}>
        <h2>Tap Dance Brewery</h2>
        <div className="links">
        <button href="#/admin" backgroundColor="#fff" hoverColor="#cece" label="Employee" />
            <button href="#/keglist" backgroundColor="#fff" hoverColor="#cece" label="Patron" />
        </div>
      </div>
    </div>
    </div>
  );
} 

export default Body; 