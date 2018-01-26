import React from 'react';
import { render } from 'react-dom';
import './style.css';

import App from './components/app.js';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'font-awesome/css/font-awesome.min.css';



render(<App/>, document.querySelector("#main"));
