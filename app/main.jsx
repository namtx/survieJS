import './main.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import 'array.prototype.findindex';

const app = document.createElement('div');

document.body.appendChild(app);

ReactDOM.render(<App/>, app);
