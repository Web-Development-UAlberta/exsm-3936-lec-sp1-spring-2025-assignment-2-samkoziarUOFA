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
      return this.length * this.width;
    }

    get perimeter() {
      return 2*(this.length + this.width);
    }

    get isSquare() {
      return this.length === this.width;
    }

    contain() {
      const side = Math.max(this.length, this.width);
      return new Rectangle(side, side, this.colour);
    }
  }



}