let newYearsResolutions = [
  "Keep a journal",
  "Take a falconry class",
  "Learn to juggle",
];

console.log(newYearsResolutions);

const hobbies = ["card games", "reading", "travel"];
console.log(hobbies);

const famousSayings = [
  "Fortune favors the brave.",
  "A joke is a very serious thing.",
  "Where there is love there is life.",
];
const listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]);

let groceryList = ["bread", "tomatoes", "milk"];
groceryList[1] = "avocados";

let condiments = ["Ketchup", "Mustard", "Soy Sauce", "Sriracha"];

const utensils = ["Fork", "Knife", "Chopsticks", "Spork"];

condiments[0] = "Mayo";
console.log(condiments);
condiments = ["Mayo"];
console.log(condiments);
utensils[3] = "Spoon";
console.log(utensils);

const objectives = ["Learn a new language", "Read 52 books", "Run a marathon"];
console.log(objectives.length);

const chores = ["wash dishes", "do laundry", "take out trash"];
chores.push("change bedsheets", "clean toilet");
console.log(chores);

const chores = [
  "wash dishes",
  "do laundry",
  "take out trash",
  "cook dinner",
  "mop floor",
];
console.log(chores);
const removed = chores.pop();

const groceryList = [
  "orange juice",
  "bananas",
  "coffee beans",
  "brown rice",
  "pasta",
  "coconut oil",
  "plantains",
];
groceryList.shift();
console.log(groceryList);

groceryList.unshift("popcorn");
console.log(groceryList);
/*[ 'popcorn',
'bananas',
'coffee beans',
'brown rice',
'pasta',
'coconut oil',
'plantains' ]*/
console.log(groceryList.slice(1, 4));
console.log(groceryList);
const pastaIndex = groceryList.indexOf("pasta");
console.log(pastaIndex);

const concept = ["arrays", "can", "be", "mutated"];

function changeArr(arr) {
  arr[3] = "MUTATED";
}

changeArr(concept);
console.log(concept);
function removeElement(newArr) {
  newArr.pop();
}
removeElement(concept)
console.log(concept);


const numberClusters = [[1, 2], [3, 4], [5, 6]]
const target = numberClusters [2] [1]

/*
1. Arrays are lists that store data in JavaScript.
2. Arrays are created with brackets [].
3. Each item inside of an array is at a numbered position, or index, starting at 0.
4. We can access one item in an array using its index, with syntax like: myArray[0].
5. We can also change an item in an array using its index, with syntax like myArray[0] = 'new string';
6. Arrays have a length property, which allows you to see how many items are in an array.
7. Arrays have their own methods, including .push() and .pop(), which add and remove items from an array, respectively.
8. Arrays have many methods that perform different tasks, such as .slice() and .shift(), you can find documentation at the Mozilla Developer Network website.
9. Some built-in methods are mutating, meaning the method will change the array, while others are not mutating. You can always check the documentation.
10. Variables that contain arrays can be declared with let or const. Even when declared with const, arrays are still mutable. However, a variable declared with const cannot be reassigned.
11. Arrays mutated inside of a function will keep that change even outside the function.
12. Arrays can be nested inside other arrays.
13. To access elements in nested arrays chain indices using bracket notation.
*/


/*1. What will happen after running the following code? 

const countries = ['Japan', 'Denmark', 'Mexico', 'Morocco'];
countries.shift();
console.log(countries); 
countries =  ['England', 'Mozambique', 'Cambodia', 'Peru']; 
console.log(countries); 

Answer: 
One array will be logged to the console followed by an error message
['Denmark', 'Mexico', 'Morocco'];
TypeError: Assignment to constant variable

2. What is the purpose of an array?
Answer: 
To store data in an organized fashion

3.What will be logged to the console when we run the code below?
Code

const cities = ['Chicago', 'San Francisco', 'New York'];
console.log(cities[3]);

Answer: Undefinied

4. How can you find how many elements are within an array?
Answer: array.length

5. How could you access the second item, ‘Lion’, in the following code block?
Code
const animalArray = ['Sloth', 'Lion', 'Chipmunk'];
Answer: animalArray[1]

6. What will be logged to the console when we run the code below?
Code

const myArray = ['item 0', 'item 1', 'item 2'];
myArray.push('item 3');
myArray.pop();
console.log(myArray);

Answer: 
['item 0', 'item 1', 'item 2']

7. What is the value of topPriority?
Code

const errands = ['Go to the bank', 'Pick up dry cleaning', 'Go grocery shopping'];

const topPriority = errands.indexOf('Pick up dry cleaning');

Answer: 1

8. What will be printed to the console?
Code

const fruits = ['Apples', 'Oranges', 'Pears', 'Mangos']; 
fruits[2] = 'Bananas';
console.log(fruits); 

Answer: 
['Apples', 'Oranges', 'Bananas', 'Mangos']
