//todays forecast is 293 kelvin
const kelvin = 293;
// Celsius is 273 less than kelvin, var Celsius made
const celsius = kelvin - 273;
// formular is: Fahrenheit = Celsius * (9/5) + 32
let fahrenheit = celsius *(9/5) + 32
// round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)

