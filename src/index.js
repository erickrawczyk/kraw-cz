import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App/App';
import './index.scss';


render(
  <App />,
  document.getElementById('root')
)
registerServiceWorker();
