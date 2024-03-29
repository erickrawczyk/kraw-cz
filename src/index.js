import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import addSmoothScrolling from './scroll/addSmoothScrolling';
import state from './state.js';
import App from './components/App/App';

import 'devicon-2.2/devicon.min.css';

import './index.scss';

render(<App pages={state} />, document.getElementById('root'));

addSmoothScrolling(state);
registerServiceWorker();
