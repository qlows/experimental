"use strict";
const $ = id => document.getElementById(id);
const dealer = $("dealer");
const player = $("player");
const pokerTable = $("pokerTable");

//A deck of card has 4 suites and each suit has 13 values (4 x 13 = 52)
const suits = ["Spades", "Diamonds", "Club", "Heart"]
const values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]

const deck = [];
createDeckOfCard(); //52 objects
const playerCards = getRandomCards(2);
const dealerCards = getRandomCards(2);
const tableCards = getRandomCards(5);

displayCards(player, playerCards);
displayCards(dealer, dealerCards);
displayCards(pokerTable, tableCards);

function createDeckOfCard() {
    suits.forEach(suit => {
        for (let value of values) {
            deck.push({ value, suit });
        }
    });
}
function getRandomCards(num) {
    let randNum;
    let returnArray = [];
    for (let i = 0; i < num; i++) {
        randNum = Math.floor(Math.random() * deck.length);
        returnArray.push((deck.splice(randNum, 1))[0]);
    }
    return returnArray;
}
function displayCards(container, cards) {
    let output = "", images = "";
    for (let item of cards) {
        output += `<h3>${item.value} of ${item.suit}</h3>`;
        images += `<img src='card-images/${value}${suits}.png' alt=${item.value} of ${item.suit}'>`;
    }
    container.innerHTML += output + images;
}