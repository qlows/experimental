"use strict";
const container = document.querySelector("#container");

let userInput = prompt("Please enter some text");
let tmpStr = '';
let i = 0;
while(userInput && i < userInput.length){
    if(userInput[i] >= 'A' && userInput[i] <= 'Z' || 
    userInput[i] >= 'a' && userInput[i] <= 'z')
    tmpStr += userInput[i];
    i++;
}
/* if(tmpStr){
    tmpStr = "You did not enter any alphabet char"
} */
tmpStr = !tmpStr?"You did not enter any alphabet char!": tmpStr;

container.innerHTML = `<h2>${tmpStr}</h2>`;

/* let someArray = [1, 2, 3, 4, "Hello"];
container.innerHTML = `<h2>${someArray.join("++")}</h2>`;

let str = "Hello WORLD";

container.innerHTML = str.toUpperCase(); //A 65, a=97
container.innerHTML = String.fromCharCode(str[0].charCodeAt() + 32); */