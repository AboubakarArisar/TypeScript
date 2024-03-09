//keywords for variable declaration and their scopes

//var keyword

//it is function scoped variable

//Example

var number_1: number = 1; 

function var_keyword() { 
var number2: number = 2; 
if (number1 + number2 == 3) { 
	var number3: number = 3; 
} 

console.log(number1); 
console.log(number2); 
// console.log(number3);  
} 

var_keyword();



//let keyword

//it is block scoped variable

//Example

let number1: number = 1; 

function let_keyword() { 
let number2: number = 2; 
if (number1 + number2 == 3) { 
	let number3: number = 3; 
} 

console.log(number1); 
console.log(number2); 
// console.log(number3); // Throws error 
} 

let_keyword();


//Advantanges of using let over var

//let keyword is block scoped whereas var is function scoped
//let keyword is not hoisted whereas var is hoisted
//let keyword is not accessible before declaration whereas var is accessible before declaration

console.log(number1); // undefined 
var number11: number = 1; 

// console.log(number2); // Throws error 
let number22: number = 2; 


//variable declared using let keyword can not b redeclared

let nm: string = "Aboubakar";
// let nm: string = "Aboubakar"; // Throws error


//const keyword

//block scoped and same like let but can not reassigned

const number111: number = 1; 

function const_keyword() { 
const number222: number = 2; 
if (number111 + number222 == 3) { 
	const number3: number = 3; 
} 

console.log(number111); 
console.log(number222); 
// console.log(number3); // Throws error 
} 

const_keyword();
