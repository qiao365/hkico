import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CookiesProvider } from 'react-cookie';
import features from './feature';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<CookiesProvider><features.NavContainer /></CookiesProvider>, document.getElementById('mainNav'));
registerServiceWorker();
