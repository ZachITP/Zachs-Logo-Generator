const {Circle, Square, Triangle} = require("./objects.js")

// Circle object
describe('Circle', () => {
    test('renders correctly', () => {
      const object = new Circle();
      var color =('red')
      object.setColor(color);
      result(object.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`);
    });
  });
  // Square object
  describe('Square', () => {
      test('renders correctly', () => {
        const object = new Square();
        var color =('green')
        object.setColor(color);
        result(object.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}">`);
      });
    });
  // Triangle object
  describe('Triangle', () => {
      test('renders correctly', () => {
        const object = new Triangle();
        var color =('blue')
        object.setColor(color);
        result(object.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${color}">`);
      });
    });
    

    