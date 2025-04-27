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

    // Properties and errors
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
      return 2 * (this.length + this.width);
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
      return (this.base * this.height) / 2;  // Triangle area
    }

    get perimeter() {
      const side = Math.sqrt((this.base / 2) * (this.base / 2) + this.height * this.height);  // Sides of the triangle
      return 2 * side + this.base;  // Perimeter of the triangle
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
      return Math.PI * Math.pow(this.radius, 2);
    }

    get circumference() {
      return 2 * Math.PI * this.radius;
    }

    // Implement the perimeter property of circle as an alias of circumference
    get perimeter() {
      return this.circumference;
    }

    contain() {
      const side = this.radius * 2;
      return new Rectangle(side, side, this.colour);
    }
  }

  // Interaction to create shapes
  const shapes = [];
  let totalArea = 0;
  let totalPerimeter = 0;
  let totalSquareArea = 0;

  while (true) {
    // Display menu
    const choice = parseInt(await input(`
Select a Shape To Create
1. Rectangle
2. Triangle
3. Circle
0. Exit
Choose: `));

    if (choice === 0) {
      break;
    }

    if (![1, 2, 3].includes(choice)) {
      output("Invalid selection. Please choose 1, 2, or 3.");
      continue; 
    }

    let shape;
    let shapeName;

    switch (choice) {
      case 1:
        shapeName = "Rectangle";
        break;

      case 2:
        shapeName = "Triangle";
        break;

      case 3:
        shapeName = "Circle";
        break;

      default:
        output("Invalid selection, please try again.");
        continue; 
    }

    output(`Creating ${shapeName}`);

    // Enter dimensions of choice
    switch (choice) {
      case 1:
        const rectLength = parseFloat(await input("Please enter Length: "));
        const rectWidth = parseFloat(await input("Please enter Width: "));
        const rectColour = await input("Please enter Colour: ");
        shape = new Rectangle(rectLength, rectWidth, rectColour);
        break;

      case 2:
        const triBase = parseFloat(await input("Please enter Base: "));
        const triHeight = parseFloat(await input("Please enter Height: "));
        const triColour = await input("Please enter Colour: ");
        shape = new Triangle(triBase, triHeight, triColour);
        break;

      case 3:
        const radius = parseFloat(await input("Please enter Radius: "));
        const circleColour = await input("Please enter Colour: ");
        shape = new Circle(radius, circleColour);
        break;

      default:
        console.log("Invalid selection, please try again.");
        continue; 
    }

    // Add the created shape to the shapes array
    shapes.push(shape);

    // Update total area and perimeter
    totalArea += shape.area;
    totalPerimeter += shape.perimeter;

    // Update total square area of containing squares
    totalSquareArea += shape.contain().area;

    // Display the totals
   output(`Total Perimeter: ${totalPerimeter}`);
   output(`Total Area: ${totalArea}`);
   output(`Total Area of Containing Squares: ${totalSquareArea}`);
  }
}