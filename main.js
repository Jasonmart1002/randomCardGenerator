// Arrays
let suits = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
let cardNo = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

//Random Number Generators
let randomSuit = Math.floor(Math.random() * suits.length);
let randomNumber = Math.floor(Math.random() * cardNo.length);

//Content
let suit = suits[randomSuit];
let number = cardNo[randomNumber];

//Change Content
document.getElementById("topLeft").innerHTML = suit;
document.getElementById("number").innerHTML = number;
document.getElementById("botRight").innerHTML = suit;

//If Statements
if (randomSuit == "0" || randomSuit == "1") {
    document.getElementById("cardMain").style.color = "black";
}else {
    document.getElementById("cardMain").style.color = "red";
}