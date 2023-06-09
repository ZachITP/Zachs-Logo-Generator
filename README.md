# Zach's Logo Generator


#### By Zach Hanson 


## Description
The application generates a logo based on user input. The program uses the inquirer package to prompt the user with questions about the logo design, such as the text, text color, shape color, and shape type. Based on the user's answers, the program creates an SVG file containing the logo.

## User Story
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered

## Purpose
This application takes the stress out of designing a logo, simply answer a few questions about styling and color and the app takes care of the rest.

<img src="./Assets/rendering.png" alt="Code example" title="code">
<img src="./Assets/Circle.png" alt="Circle example" title="Circle">
<img src="./Assets/Square.png" alt="Square example" title="Square">
<img src="./Assets/Triangle.png" alt="Triangle example" title="Triangle">
<img src="./Assets/jest_test.png" alt="jest test" title="jest test">

## Video Walkthrough

<img src="./Assets/Logo_Generator.gif" alt= "walkthrough" title="walkthrough">

## Technologies Used
JavaScript, Node Js, Jest, Inquirer

## Website
Check out more of my work at https://github.com/ZachITP

## License
MIT Copyright (c) 2023 Zach Hanson

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.