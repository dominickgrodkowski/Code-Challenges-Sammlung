//Variables 
var favoriteFood = 'pizza';
var numOfSlices = 8
console.log(favoriteFood)
console.log(numOfSlices)

let changeMe = false
console.log(changeMe)

const entree = 'Enchiladas'
console.log(entree)

let levelUp = 10;
levelUp += 5
let powerLevel = 9001;
powerLevel -= 100
let multiplyMe = 32;
multiplyMe *= 11
let quarterMe = 1152;
quarterMe /= 4

// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

let gainedDollar = 3;
gainedDollar++
let lostDollar = 50;
lostDollar--

let favoriteAnimal = 'Capybara'
console.log('My favorite animal:' + favoriteAnimal)

let myName = 'Dominick'
let myCity = 'Hamburg'
console.log(`My name is ${myName}. My favorite city is ${myCity}`)

let newVariable = 1;
console.log(typeof newVariable)
console.log(typeof newVariable)

/*Let’s review what we learned:

Variables hold reusable data in a program and associate it with a name.
Variables are stored in memory.
The var keyword is used in pre-ES6 versions of JS.
let is the preferred way to declare a variable when it can be reassigned, and const is the preferred way to declare a variable with a constant value.
Variables that have not been initialized store the primitive data type undefined.
Mathematical assignment operators make it easy to calculate a new value and assign it to the same variable.
The + operator is used to concatenate strings including string values held in variables.
In ES6, template literals use backticks ` and ${} to interpolate values into a string.
The typeof keyword returns the data type (as a string) of a value. */
