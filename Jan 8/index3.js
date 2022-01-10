// let firstCard = 6;
// let secondCard = 9;
// let sum = firstCard + secondCard;
// // console.log(sum);
// if(sum < 21){
//     console.log("Do you want to draw a new card?");
// }
// else if(sum === 21){
//     console.log("Wohoo! You've got Blackjack!");
// }
// else{
//     console.log("You're put of the game!");
// }

// let age = 22;
// if(age <= 20){
//     console.log("You cann not enter the club");
// }
// else{
//     console.log("Welcome!");
// }

// let age = 100;
// if(age < 100){
//     console.log("not Eligible");
// }
// else if(age === 100){
//     console.log("Here is your birthday card from the King!");
// }
// else{
//     console.log("Not eligible, you have already gotten one");
// }

// let firstCard = 10;
// let secondCard = 11;
// let sum = firstCard + secondCard + 4;
// let haBlackJack = false;
// let isAlive = true;
// if(sum <= 20){
//     console.log("Do you want to draw a new card?");
// }
// else if(sum === 21){
//     console.log("Wohoo! You've got Blackjack!");
//     hasBlackJack = true;
// }
// else{
//     console.log("You're out of the game!");
//     isAlive = false;
// }

// console.log(isAlive);

// console.log(4 === 3); //false 
// console.log(5 > 2); //true
// console.log(12 > 12); //false
// console.log(3 < 0); //false
// console.log(3 >= 3); //true
// console.log(11 <= 11); //true
// console.log(3 <= 2); //false

let firstCard = 10;
let secondCard = 11;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard + 4;
let haBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
//console.log(messageEl);
let sumEl = document.getElementById("sum-el");
//let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame(){
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]; 
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    }
    else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    }
    else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
    //console.log(message);
}

function newCard(){
    let card = 7;
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
}