// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {

// 
  class Shape {
    #colour = "white";

    constructor(colour) {
        if (this.constructor === Shape) {
            throw new Error("Cannot instantiate abstract class Shape!.");
        }
        this.#colour = colour || this.#colour; // default to white
    }

    get colour() {
        return this.#colour;
    }

    set colour(value) {
        this.#colour = value;
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

}
