const container = document.querySelector("#container");
let output = "";
// let items = newArray("item1", 5, "item2", 9);
let items = ["item1", 5, "item2", 9];
container.innerHTML = items; //"item1", 5, "item2", 9

container.innerHTML = items[3];

items[3] = "New value";
container.innerHTML = items;
/* for(let i = 0; i < items.length; i++){
    output += items[i] + "*_*";
} */

container.innerHTML = items.join("*");
const numbers = [4, 3, 2, "hello", 33, 6, 7, 9, 11, 44, 4556];
//numbers[0] = 999;
container.innerHTML = numbers
let oddNumbers = "";
let evenNumbers = "";
for(let i = 0; i < numbers.length; i++){
    if(typeof numbers[i] == "number"){
        if(numbers[i] % 2 == 0){
          evenNumbers += numbers[i] + "-";
        }
        else{
         oddNumbers += numbers[i] + "-";
        }
    }
}
container.innerHTML += `<h2>even numbers: ${evenNumbers}</h2>`;
container.innerHTML += `<h2>odd numbers: ${oddNumbers}</h2>`;

const imgContainer = document.querySelector("#imgContainer");
const listOfImages = ["blueberries.jpg", "deer.jpg", "fog.jpg"];
for(let i in listOfImages){ // ignores undefined
    output += `<div class="imgColumn"><img src='img/${listOfImages[i]}' alt="image ${i}"></div>`;
}
imgContainer.innerHTML = output;

let questions = ['How do you create an array in JS?',
'How do you create an object in JS,',
'How do you concatenate arrays in JS?',
'How do you add numbers in JS?'];
let randNum;
let questionStr = '';
for(let i = 0; i < 2; i++){
    randNum = Math.floor(Math.random() * questionStr.length);
    questionStr += `<h3>${questions[randNum]}</h3>`;
}
container.innerHTML += questionStr;