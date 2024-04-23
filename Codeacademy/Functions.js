function getReminder() {
    console.log('Water the plants.');
}
function greetInSpanish() {
    console.log('Buenas tardes');
}

function sayThanks() {
    console.log('Thank you for your purchase! We appreciate your business.');
}
sayThanks()
sayThanks()
sayThanks()

function sayThanks(name) {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
  }
  sayThanks('Cole')

  function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }
  

  function monitorCount(rows, columns) {
    rows*columns
  }

  function monitorCount(rows, columns) {
    return rows * columns;
  }
  const numOfMonitors = monitorCount(5, 4);
  console.log(numOfMonitors);


  function monitorCount(rows, columns) {
    return rows * columns;
  }
  function costOfMonitors(rows, columns) {
    return;
  }
  function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200;
  }
  const totalCost = costOfMonitors(5, 4);
  console.log(totalCost);

  const plantNeedsWater = function plantNeedsWater(day) {
    
  }

  const plantNeedsWater = function plantNeedsWater(day) {
    if (day === "Wednesday") {
      return true;
    } else {
      return false;
    }
  };
  plantNeedsWater('Tuesday')
  console.log(plantNeedsWater('Tuesday'));


  const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };

  const plantNeedsWater = day => 
   day === 'Wednesday' ? true : false;
;


/*A function is a reusable block of code that groups together a sequence of statements to perform a specific task.

A function declaration :

Diagram showing the syntax of a function declaration
A parameter is a named variable inside a function’s block which will be assigned the value of the argument passed in when the function is invoked:

JavaScript syntax for declaring a function with parameters
To call a function in your code:

Diagram showing the syntax of invoking a function
ES6 introduces new ways of handling arbitrary parameters through default parameters which allow us to assign a default value to a parameter in case no argument is passed into the function.

To return a value from a function, we use a return statement.

To define a function using function expressions:

defining a function expression
To define a function using arrow function notation:


Function definition can be made concise using concise arrow notation:

comparing single line and multiline arrow functions */


/*Little extra Quiz:
1. What will this code print to the console?

const sleepTimer = (alarm) => {
  console.log('My alarm is set for: ' + alarm);
}

sleepTimer('8:30AM');

Answer: My alarm is set for: 8:30AM

2. Which of the following is a parameter in the block of code below?

let input = 8;
const controlVal = input / 2 + 3;
const multiplier = (number, phase) => {
  const val = number * controlVal + phase;
  console.log(val);
};

Answer:  number and phase

3. What best describes what a function in JavaScript is used for?

Answer: A function is a reusable piece of code that can accept input and perform a specific task

4. What will be printed to the console?

const eatFruit = (fruit = 'apple') => {
  console.log(`This ${fruit} is delicious!`);
};

eatFruit();

Answer: This Apple is delicious 

5. Which correctly represents the most condensed form of a function?

Answer: Concise body syntax (with one parameter) does not use parentheses, curly braces, or the return keyword.
Example: const areaOfCircle = radius => Math.PI * radius * radius */

