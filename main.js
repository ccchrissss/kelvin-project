// create a constant variable named Kelvin with a value of 293
const Kelvin = 293;
// create a constant variable named celsius with a value equal to Kelvin minus 273
const celsius = Kelvin - 273;
// create a variable named fahrenheit with a value equal tot celsius times 9/5 plus 32. It will be rounded down later so it must not be a constant
var fahrenheit = celsius * (9/5) + 32;
// update the fahrenheit variable so it rounds down to the nearest integer.
var fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
