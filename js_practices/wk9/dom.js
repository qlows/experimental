"use strict";
const $ = id => document.getElementById(id);
const addClassBtn = $("addClassBtn");
const addTextBtn = $("addTextBtn");
const addFieldBtn = $("addFieldBtn");
addClassBtn.addEventListener("click", myFunction);
addTextBtn.addEventListener("click", addTextToBody);
addFieldBtn.addEventListener("click", addAnotherField);

function myFunction(){
    const myDiv = $("myDiv");
    myDiv.innerHTML = "Some other text inside this div!";
    myDiv.setAttribute("class", "bgClass");
/*  myDiv.setAttribute("class", "bgClass sizeClass"); */
    /* let existingClasses = myDiv.className;
    myDiv.className = existingClasses + " newClass";  */
    myDiv.classList.add("newClass");
}

function addTextToBody(){
    let txt = document.createTextNode("Today we had our Midterm exam!");
    //document.body.insertBefore(txt, document.body.childNodes[0]);
    let myH2 = document.createElement("h2");
    myH2.appendChild(txt);
    //document.body.insertBefore(myH2, document.body.childNodes[0]); //opening body tag
    document.body.append(myH2); //closing body tag
}

function changeAllLinks(){
    //let links = document.getElementsByTagName("a");
    let links = document.querySelectorAll("a");
    for(let link of links){
    link.setAttribute("target", "myTab");
    }
}
changeAllLinks();

/* let para = document.querySelectorAll("p");
for(let i = 0; i < para.length; i++){
    para[i].style.backgroundColor = "yellow";
} */

function addAnotherField(){
    let count = document.forms[0].childElementCount;
    let p = document.createElement("p");
    p.appendChild(document.createTextNode("Passenger" + ++count + " : "));
    let field = document.createElement("input");
    field.setAttribute("type", "text");
    field.placeholder = "Name";
    p.appendChild(field);
    document.forms[0].appendChild(p);
}