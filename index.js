const fs = require('./node_modules/graceful-fs/graceful-fs')
const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require("./lib/shapes");


class Svg{
  constructor(){
      this.textElement = ''
      this.shapeElement = ''
  }
  render(){

      return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
  }
  loadTextElement(text,color){
      this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
  }
  loadShapeElement(shape){
      this.shapeElement = shape.render()

  }
  
}

const questions= [

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
choices: ['triangle', 'square', 'circle'],
},
{
  type: "input",
  name: "logocolor",
  message: "Please select a color for your logo or enter a hyxadecimal number",
},
];

//function takes data and writes it to newly created SVG
function writedata (fileName, data) {
  console.log("Writing [" + data + "] to file [" + fileName + "]")
  fileSystem.writedata(fileName, data, function (err) {
    if (err) {
      return console.log (err);
    }
    console.log("whoohoo!! you just created your logo!");
  });
}


async function start() {
  console.log("run function");
  var svgString = "";
  var svg_file = "logo.svg";

// ask the user for answers
  const answers = await inquirer.createPromptModule(questions);

  var user_text = "";
  if (answers.text.length > 0 && answers.text.length < 4) {
    // 3 charecters only
    user_text = answers.text;
  } else {
    // 4 and above charecters = invalid entry
    console.log("invalid answer, only 1-3 charecters allowed ");
    return;
  }

  console.log("logo text: [" + user_text + "]");
	//user font color
	user_font_color = answers["text-color"];
	console.log("font color: [" + user_font_color + "]");
	//user shape color
	input_shape_color = answers.shape;
	console.log("shape color: [" + input_shape_color + "]");
	//user shape type
	input_shape_type = answers["pixel-image"];
	console.log("shape type = [" + input_shape_type + "]");
	
	//input shape type
	let input_shape;
 
  //circle
	if (input_shape_type === "Circle" || input_shape_type === "Circle") {
		input_shape = new Circle();
		console.log("You selected a Circle");
	}
  //triangle
	else if (input_shape_type === "Triangle" || input_shape_type === "Triangle") {
		input_shape = new Triangle();
		console.log("You selected a Triangle");
	}
   //square 
	else if (input_shape_type === "Square" || input_shape_type === "Square") {
		input_shape = new Square();
		console.log("You selected a square");
	}
  //if shape type not listed send them a message
	else {
		console.log("That is not a listed shape type, please try again or return to kindergarten");
	}
	input_shape.setColor(input_shape_color);

	// Create a new Svg and add shape and text selection to it
	var svg = new Svg();
	svg.loadTextElement(user_text, user_font_color);
	svg.loadShapeElement(input_shape);
	svgString = svg.render();
	
	//Print finalized shape to log
	console.log("Displaying shape:\n\n" + svgString);
	//document.getElementById("svg_image").innerHTML = svgString;

	console.log("Logo generation complete!");
	console.log("Saving shape to file...");
	writeToFile(svg_file, svgString); 
}
start()
  






















































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
    
