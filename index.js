const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const {generateSVG, makeshape} = require('./lib/makesvg');

inquirer 
  .prompt ( [

{
  type: "input",
  name: "text",
  message: "Please enter your logo text (3 characters only)"

},
{
  type: "input",
  name: "textColor",
  messsage: "Please enter a color keyword or hexa decimal number for your text's color"

},
{
type: 'list',
name: 'logoshape',
message: "Please select logo shape (press enter when you have made your selection)",
choices: ['circle', 'square', 'triangle'],
},
{
  type: "input",
  name: "logocolor",
  message: "Please select a color for your logo or enter a hyxadecimal number",
}




])




















































// Example dog object made from scratch. Writning 100 of these from scratch would take a long time.
// const dog = {
//   name: 'Rex',
//   age: 2,
//   breed: 'Bulldog'


// Constructor function can be used to create objects containing properties "name", "age", "breed", and the "nap()" function
function Dog(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.nap = function () {
      console.log('Zzzzzzzzz');
    };
  }
  
  // Sets the variable "dog" to a Dog object and initializes with name, age, and breed properties
  const dog = new Dog('Rex', 2, 'Bulldog');
  
  // Calling dog's nap method
  dog.nap();
    
├── examples/           // Example svg file(s) created with the app
├── lib/                // Folder for classes or functions
    ├── shapes.js       // Exports `Triangle`, `Circle`, and `Square` classes
    ├── shapes.test.js  // Jest tests for shapes
    └── more...         // Additional files and tests
├── .gitignore          // Indicates which folders and files Git should ignore
├── index.js            // Runs the application using imports from lib/
├── package.json
└── README.md           // App description, link to video, setup and usage instructions           
```