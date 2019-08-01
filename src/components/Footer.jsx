import React from 'react';

const footer = {
  color: 'gray',
  fontWeight: 'bold'
};

function Footer() {
  return (
    <div style={footer}>
      <p className="footer">&copy; Tap Dance Brewery, 2019.</p>
    </div>
  );
}

export default Footer;
