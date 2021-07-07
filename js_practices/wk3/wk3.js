const out = document.getElementById("output");
// out.innerHTML = "Hello there";

/* let okFlag = isNaN("12.345");
out.innerHTML =! okFlag; */

// == (only checks the value) vs === (checks the type and value)
let age = 20;
/*if(age == 20)  {
    out.innerHTML = "What would you like to drink?";
} */

/*
const d = new Date();
let day = d.getDay(); //between 0 and 6. Sunday(0) - Saturday(6)
let hour = d.getHours();

//out.innerHTML = day;
// day = 5; 
if(day == 1){ //Monday
    out.innerHTML = "Today, burgers are half price";
}
else if(day == 2 && hour > 17){ //Tuesday
    out.innerHTML = "Today is Tuesday and, wings are half price (with purchase of drink)";
}
else if(day == 3 || day == 0){ //Wednesday OR Sunday
    out.innerHTML = "Today, free pop with purchase of wings/ribs";
}
else{
    out.innerHTML = "Nothing is on sale today!!! :(";
}*/


age = prompt("How old are you?", 19);
if(age >= 19){
    out.innerHTML = "Beer/Wine/...?";
}
else if(age > 10){
    out.innerHTML = "Water/Pop/Juice/...?";
}
else if(age > 4){
    out.innerHTML = "Water/Juice/...?";
}
else{
    out.innerHTML = "Water/Milk/...?";
}


let counter = 0;
do{

    age = prompt("How old are you?", 19);
if(age == null){ // cancel was clicked
    // break;
    alert("please come again!!!");
}

else if(!isNaN(age) && age > 0){
if(age >= 19){
    out.innerHTML = "Beer/Wine/...?";
    out.innerHTML += " It took you " + counter + " attempt tp enter right number";
}
else if(age > 10){
    out.innerHTML = "Water/Pop/Juice/...?";
}
else if(age > 4){
    out.innerHTML = "Water/Juice/...?";
}
else{
    out.innerHTML = "Water/Milk/...?";
}
counter++;
}
else{
    alert("you did not enter a valid number");
}

}
while(counter < 3 && age != null && isNaN(age) || age < 0); 

/* let tempOutputStr = "**";
let numOfAsterisk = 5;

let i = 0;
while(i < numOfAsterisk){
    tempOutputStr += "*";
    i++;
}
out.innerHTML = tempOutputStr;
let numbers = [2, 3, 4];
let total = 0;
for(let i = 0; i < numbers.length; i++){
    total += numbers[i];
}

tempOutputStr = "";
let myStr = "Hello world";
for(let i = 0; i < myStr.length; i++){
    tempOutputStr += myStr[i] + " - ";
}
out.innerHTML = tempOutputStr; */
/*
let randNum = Math.random(); //0-1;
out.innerHTML = randNum;
randNum = randNum * 10;
out.innerHTML += "<br>" + randNum;

//randNum = Math.floor(randNum); //rounds down the number //0-9
randNum = Math.ceil(randNum); //rounds up the number //1-10
out.innerHTML += "<br>" + randNum;
randNum = Math.floor(Math.random() * 10) + 10; //0-9
out.innerHTML += "<br>" + randNum;
*/