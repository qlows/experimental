let box = document.getElementById("box");
let isGreen = false;
changeColor();

box.addEventListener("mouseover", changeColor);
box.addEventListener("mouseout", changeColor);

function changeColor() {
    box.style.backgroundColor = isGreen ? "lightgray" : "green";
    isGreen = !isGreen; //toggle between true and false
}

// adding click event to the image
let isImgFace = false;
let imgElement = document.getElementById("toggleImage");

imgElement.addEventListener("click", toggleImage);

function toggleImage() {
    imgElement.src = isImgFace ? "back.png" : "forward.png";
    isImgFace = !isImgFace; //toggle between true and false
}

// double click
let box2 = document.getElementById("box2");
let isCyan = false;

anotherColor();
box2.addEventListener("dblclick", anotherColor);

function anotherColor() {
    box2.style.backgroundColor = isCyan ? "red" : "cyan";
    isCyan = !isCyan; //toggle between true and false
}  