//required packages and objects.js link
const fileSystem = require ("fs");
const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require("./Assets/objects.js");

//render object and color for the logo
class Svg{
  constructor(){
      this.textElement = ''
      this.objectElement = ''
  }
  render(){
//object properties
      return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.objectElement}${this.textElement}</svg>`
  }
  //text and color properties
  loadTextElement(text,color){
      this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
  }
  loadobjectElement(object){
      this.objectElement = object.create()

  }
  
}
//asks the user what they want in their logo
const questions= [

{
        type: "input",
        name: "text",
        message: "Choose 3 characters for your logo:",
    },
    {
        type: "input",
        name: "text-color",
        message: "Enter a text color (OR a hexadecimal number):",
    },
    {
        type: "input",
        name: "object",
        message: "Enter a shape color (OR a hexadecimal number):",
    },
    {
        type: "list",
        name: "object-type",
        message: "Enter a shape type",
        choices: ["Circle", "Square", "Triangle"],
    },
];

//function takes data and writes it to newly created SVG
function writeTodata (fileName, data) {
  console.log("Writing [" + data + "] to file [" + fileName + "]")
  fileSystem.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log (err);
    }
    console.log("whoohoo!! you just created your logo, check for 'Logo.svg' in the file explorer");
  });
}


async function start() {
  console.log("Starting function");
var svgString = "";
var svg_file = "logo.svg";

  // Prompt the user for answers
  const answers = await inquirer.prompt(questions);

//user text
var user_text = "";
if (answers.text.length > 0 && answers.text.length < 4) {
  // 1-3 chars, valid entry
  user_text = answers.text;
} else {
  // 0 or 4+ chars, invalid entry
  console.log("Invalid user text field detected! Please enter 1-3 Characters, no more and no less");
      return;
}
console.log("User text: [" + user_text + "]");
//user font color
user_font_color = answers["text-color"];
console.log("User font color: [" + user_font_color + "]");
//user object color
user_object_color = answers.object;
console.log("User object color: [" + user_object_color + "]");
//user object type
user_object_type = answers["object-type"];
console.log("User entered object = [" + user_object_type + "]");

//user object
let user_object;
if (user_object_type === "Circle" || user_object_type === "circle") {
  user_object = new Circle();
  console.log("User selected Circle object");
}
else if (user_object_type === "Square" || user_object_type === "square") {
  user_object = new Square();
  console.log("User selected Square object");
}

else if (user_object_type === "Triangle" || user_object_type === "triangle") {
  user_object = new Triangle();
  console.log("User selected Triangle object");
}
else {
  console.log("Invalid object!");
}
user_object.setColor(user_object_color);

// Create a new Svg instance and add the object and text elements to it
var svg = new Svg();
svg.loadTextElement(user_text, user_font_color);
svg.loadobjectElement(user_object);
svgString = svg.render();

//Print object to log
console.log("Displaying object:\n\n" + svgString);
//document.getElementById("svg_image").innerHTML = svgString;

console.log("object generation complete!");
console.log("Writing object to file...");
writeTodata(svg_file, svgString); 
}
start()