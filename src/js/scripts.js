// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {

 // Abstract Shape class
 class Shape {
  constructor(colour) {
    if (new.target === Shape) {
      throw new Error("Cannot instantiate abstract class Shape!");
    }
    this.colour = colour;
  }

    // properties and errors
    get perimeter() {
        throw new Error(`Abstract method perimeter() must be implemented for ${this.constructor.name}`);
    }
    get area() {
        throw new Error(`Abstract method area() must be implemented for ${this.constructor.name}`);
    }
    contain() {
        throw new Error(`Abstract method contain() must be implemented for ${this.constructor.name}`);
    }
  }

   // Rectangle class inheriting from Shape
   class Rectangle extends Shape {
    constructor(length, width, colour) {
      super(colour);
      this.length = length;
      this.width = width;
    }

    get area() {
      return this.length*this.width;
    }

    get perimeter() {
      return 2*(this.length+this.width);
    }

    get isSquare() {
      return this.length === this.width;
    }

    contain() {
      const side = Math.max(this.length, this.width);
      return new Rectangle(side, side, this.colour);
    }
  }


// Triangle class inheriting from Shape
class Triangle extends Shape {
  constructor(base, height, colour) {
    super(colour);
    this.base = base;
    this.height = height;
  }

  get area() {
    return (this.base*this.height) / 2;
  }

  get perimeter() {
    // Perimeter for an equal-sided triangletriangle
    const side = Math.sqrt((this.base/2) * (this.base/2) + this.height*this.height);
    return 2*side+this.base;
  }

  contain() {
    const side = Math.max(this.base, this.height);
    return new Rectangle(side, side, this.colour);
  }
}


// Circle class inheriting from Shape
class Circle extends Shape {
  constructor(radius, colour) {
    super(colour);
    this.radius = radius;
  }

  get area() {
    return Math.PI*Math.pow(this.radius, 2);
  }

  get circumference() {
    return 2*Math.PI*this.radius;
  }

  // Implement the perimeter property of circle as an alias of circumference 
  get perimeter() {
    return this.circumference;
  }

  contain() {
    // Return rectangle with side length equal to the diameter of the circle
    const side = this.radius*2;
    return new Rectangle(side, side, this.colour);
  }
}


// Interaction to create shapes

const shapes = [];
let totalArea = 0;
let totalPerimeter = 0;
let totalSquareArea = 0;

while (true) {
  const choice = parseInt(await input("Enter number of shape to create: 1. Rectangle \n 2. Triangle \n 3. Circle \n 0. Exit. \n Choice: "));
  
  if (choice === 0) {
    break;
  }
}



}