let secretNumber = Math.floor(Math.random() * 10);
const msg = document.getElementById("message");
let userInput;
let attempt = 1;
let output = "Don't give up. keep on trying!";

do{
    userInput = prompt("The number is between 0-10. Can you guess it? x to exit.")
    if(userInput === null || userInput === "x"){
        break;
    }
    if(isNaN(userInput) || userInput.trim() == ""){
        alert("That was not a number!");
        continue;
    }
    else{
        if(userInput == secretNumber){
            output = `Congrats! It took you ${attempt} attempts to guess it.`;
            break;
        }
        else if(userInput > secretNumber){
            alert("Too high");
        }
        else{
            alert("Too low");
        }
    }
    attempt++;
}
while(attempt <= 5);
msg.innerHTML = output;