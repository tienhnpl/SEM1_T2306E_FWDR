import React from 'react';
import ReactDOM from 'react-dom/client';
import User from './user';
// //1. Example 1 JSX
// const example1 = <h1>Hello JSX!</h1>;

// const root1 = ReactDOM.createRoot(document.getElementById('root'));
// root1.render(example1);

// //2. Example 2: Expression

// const example2 = <h1>React is {5 + 5} times better with JSX</h1>;

// const root2 = ReactDOM.createRoot(document.getElementById('root'));
// root2.render(example2);


// //3. Example 3:
// const x = 5;

// const myElement = <h1>{(x) < 10 ? "Less than 10 🌽" : "Greater than 10 🌽"}</h1>;

// const root3 = ReactDOM.createRoot(document.getElementById('root'));
// root3.render(myElement);

// 4. Example 4
const root4 = ReactDOM.createRoot(document.getElementById('root'));
root4.render(
    <User></User>
);
