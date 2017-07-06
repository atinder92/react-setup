import Person from './es6/person.js';
import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './react/helloworld.component.js'


console.log("App Loaded");

var person = new Person("Atinder",25);
person.displayInformation();

//Render React Component
ReactDOM.render(<HelloWorld/>,document.getElementById("reactOutput"));