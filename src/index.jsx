import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom'; 

const heading = React.createElement('h1', {}, 'TapDance');
const app = React.createElement('div', {}, heading);

const render = (Component) => {}
  ReactDOM.render(
  <AppContainer>
    <HashRouter>
      <Component/>
    </HashRouter>
   </AppContainer>
    document.getElementById('react-app-root')
  );
};

render(App); 
if (module.hot){
  module.hot.accept('.components.App', () => {
    render(App)
  })
}