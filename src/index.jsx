import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement('h1', {}, 'TapDance');
const app = React.createElement('div', {}, heading);

ReactDOM.render(
  <div>
  <h1>Welcome to Tap Dance!</h1>
  <h3>I'd tap that...</h3>
    </div>,
    document.getElementById('react-app-root')
  );
