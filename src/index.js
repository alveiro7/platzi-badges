// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css'

//JSX
//const element = <h1>Hello, Platzi Badges! 💪</h1>;

import Badge from './components/Badge';

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<Badge
    firstName="Alveiro"
    lastName="Hoyos"
    avatarUrl="https://lh3.googleusercontent.com/ogw/ADGmqu_7Pv4Xgfuo-6gHVXEZtqPGCKVox88ksnMKyyVJ=s32-c-mo"
    jobTitle="Frontend Engineer"
    twiiter="alveiro7"/>, container);
