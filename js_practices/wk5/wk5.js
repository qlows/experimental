"use strict";
const out = document.querySelector("#output");
const date = new Date();
console.log(date);

const n = date.toDateString();
console.log(n); //Tuesday June 8 2021
out.innerHTML = n;

const time = date.toLocaleTimeString();
console.log(time); // 1:13:12 pm
out.innerHTML += "<br>" + time;

//calculate the number of day left to xmas
const getNumOfDaysToXmas = function(){
    const today = new Date();
    let xMas = new Date(today.getFullYear(), 11, 25);
    let oneDay = 1000 * 24 * 60 * 60;
    let daysLeft = Math.ceil((xMas.getTime() - today.getTime()) / oneDay);
    return daysLeft;
}

out.innerHTML += "<br>" + getNumOfDaysToXmas() + " days left to Xmas.";