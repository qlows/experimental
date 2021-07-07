const out = document.getElementById("output");

var people = [
    ["Joseph", 27, "United States", ["blue", " black"]],
    ["Maria", 21, "Uruguay", ["brown", " green"]],
    ["Brian", 35, "France", ["green", " red"]],
    ["Susan", 42, "Australia", ["blue", " blonde"]]
];

for(var i = 0; i < people.length; i++){
    document.write("<h2> person " + (i + 1) + "</h2>");
    for(var details in people[i]){
        document.write(people[i] [details] + "<br>");
    }
}