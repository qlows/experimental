const out = document.getElementById("output");

const randomN = Math.floor(Math.random() * 10);

for(var attempts = 1; attempts <= 3; attempts++){ //ask for a number from user
    var guess = prompt("Please enter a number between 0 and 10.");//asks user to enter a number
    if(guess == null){
        break;
    }

    else if(isNaN(parseInt(guess))){//check if its a number
        alert("Sorry honey, your input is not a number!");
        attempts--;
    }

    else{//when its a number
        if(parseInt(guess) == randomN){//when its correct
            alert("You got it, babe!");
            alert("It took " + attempts + " attempts to guess it.");
            break;
        }

        else if(parseInt(guess) > randomN){
            alert("Too high!");
        }
        
        else{
            alert("Too low!");
        }
    }
}