[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/Smqq-TzG)
# University of Alberta Browser Console Template Repository
## Full Stack Web Application Development Program
### This repository is intended for the development of console JavaScript applications.

Run `npm run lint` to attempt to detect errors in your repository.

Use `output()` and `await input()` from `./src/js/scripts.js` to allow the user to interact with the console.
To run the console, launch `./src/index.html`.

This repository is intended for the submission for EXSM 3936 - JavaScript II - Module 02 Assignment Inheritance & Polymorphism
Submitted by: Samantha Koziar



======== Example Output ========

Select a Shape To Create
1. Rectangle
2. Triangle
3. Circle
0. Exit
Choose: 5

Invalid selection, please try again.
Choose: 1

Creating Rectangle
Please enter Length: 5
Please enter Width: 3

Total Perimeter: 16
Total Area: 15
Total Area of Containing Squares: 25

Select a Shape To Create
1. Rectangle
2. Triangle
3. Circle
0. Exit
Choose: 



--- COPY OF ASSIGNNMENT INSTRUCTIONS ---

Assignment Directions
You are to write classes that represent a selection of shapes including a rectangle, triangle (isosceles) and circle to inherit from a common abstract Shape parent. The parent should contain abstract Area and Perimeter derived properties, a Colour field, as well as an abstract Contain() method.

Each child class will implement a constructor and the appropriate dimension properties:
Rectangle: Length, Width
Triangle: Base, Height
Circle: Radius
Each child class will also contain the following additional derived properties:
Rectangle: IsSquare
Circle: Circumference
Each child class will implement the Area and Perimeter derived from the parent.
Each child class will implement the Contain() method to return a new Rectangle representing the smallest square that can contain that shape.



Implement the Perimeter property of Circle as an alias of Circumference:

 get perimeter() {
     return this.circumference;
 }

Once your classes are constructed, write a program that will prompt the user to create a list of shapes. The shapes should be stored in a polymorphic list. After each addition, display the total perimeter and area of all stored shapes to the user. Additionally, display the total area of the squares generated from the Contain() method run on each shape.


