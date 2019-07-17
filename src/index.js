import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from "./TodoList";

var destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <h2>Smooth ToDo List &copy; 2019</h2>
        <h6>Smooth ToDo List allows you to enter multiple tasks.</h6>
        <TodoList/>
    </div>,
    destination
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
