// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

//JSX
//const element = <h1>Hello, Platzi Badges! 💪</h1>;

import Badge from './components/Badge';

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<Badge />, container);
