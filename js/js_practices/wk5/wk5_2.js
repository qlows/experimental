"use strict";
const out = document.getElementById("output");

/* let userInput = "1AB233adf{31}=_;DDeE" */
let userInput = prompt("Please enter your text");
out.innerHTML = "<br>" + userInput;
out.innerHTML += "<br>" + selectUppercaseFromString(userInput);
out.innerHTML += "<br>" + selectDigitsFromString(userInput);

function selectUppercaseFromString(str) { //AB233adf{}=_;DDeE
    let tmpStr = "";
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) >= "A" && str[i] <= "Z"){ //or "a" "z"
            tmpStr += str[i];
        }
    }
    return tmpStr;
}

function selectDigitsFromString(str) { 
    let tmpStr = "";
    for(let i = str.length - 1; i >= 0; i--){
        if(str.charAt(i) >= 0 && str[i] <= 9){
            tmpStr += str[i];
        }
    }
    return tmpStr;
}
