const output = document.getElementById("output");

let randNum = Math.random(); //0-1
output.innerHTML = `<h2>${randNum}</h2>`;

/* randNum = Math.floor(randNum * 10);
output.innerHTML += `<h2>${randNum * 10}</h2>`;

randNum = Math.ceil(randNum);
output.innerHTML += `<h2>Random number ceiled: ${randNum}</h2>`;

randNum = Math.round(randNum);
output.innerHTML += `<h2>Random number rounded: ${randNum}</h2>`;
 */
randNum = (Math.floor(randNum * 16) + 5);
output.innerHTML += `<h2>Random number between 5-20 (inclusive) ${randNum}</h2>`;