const msg = document.getElementById("message");
let str = "Hello world!";
// H-e-l-l-o- -w-o-r-l-d

let tmpStr = '';
/* msg.innerHTML += str[1];
msg.innerHTML = str.length;
msg.innerHTML = str.charAt(4); */
/* let i = 0;
while(i < str.length){
    msg.innerHTML += str[i] + '-';
    i++; //++i = pre increment | i++ post increment
}
 */

let n = str.length -1;
while(n >= 0){
    //if(str[n] === "o" || str[n] == "O"){
        if(str[n].toLocaleLowerCase() === "o"){  
    tmpStr += "*_*";
    }
    else{
     tmpStr += str[n];  
    }
    n--; //-1
}
msg.innerHTML += tmpStr;