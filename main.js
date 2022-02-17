// this is the temperature in K
const kelvin = 0;

// this is the temperature in C
const celsius = kelvin - 273;

//This is the temperature in fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

// rounds fahrenheit down to the nearest integer
fahrenheit = Math.floor(fahrenheit);

let newton = celsius * (33/100);
newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
console.log(`The temperature is ${newton} degrees? newton.`)
