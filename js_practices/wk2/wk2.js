"use strict";

/* Learning JavaScript is fun 
Second line of my comment*/

// Single line comment

let studentID = "101232721";
//alert(studentID);
console.log(studentID);
let studentAge = prompt("Please enter your age");
document.write("Student\'s age is : " + studentAge);

let qty = parseInt(prompt("How many beer would you like?"))
//alert(typeof qty);
const beerPrice = 5;
document.write("<p>Total is: $" + (1 + qty * beerPrice) + "</p>");
document.write(`<p>Total is: $${1 + qty * beerPrice} </p>`);
let weight = parseFloat(prompt("How many pounds of rice?"));
document.write(`<p>you entered: ${weight} </p>`)
document.getElementById("output").innerHTML = "The weight is: " + weight;

let someNum = 3.12622; //3.13
document.write(`<p>Number rounded to two decimal: ${someNum.toFixed(2)} </p>`)