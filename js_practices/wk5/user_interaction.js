const output = document.getElementById("output");
    let user = prompt("Hey there, please enter your name");
    let txt = "";
    /*if(user === null || user == ''){ // user clicked on cancel
        txt = `<h2> Goodbye </h2>`;
    }
    else{ //user clicked on ok
        txt = `<h2>Hello ${user}</h2>`;
    }*/
    if(user){
        txt = `<h2>Hello ${user}</h2>`;
    }
    else{
        txt = `<h2>Goodbye</h2>`;
    }
    output.innerHTML = txt;

    let color = prompt(`What is your favorite color ${user}?`);
    let confirmedColor = confirm(`Do you like the background color change to ${color}?`);
    if(confirmedColor){
        document.body.style.backgroundColor = color;
    }