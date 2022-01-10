//document.getElementById("count-el").innerText = 5;
//ctrl+k+c
// let firstBatch = 5;
// let secondBatch = 7;
// let count = firstBatch + secondBatch;
// console.log(count)

// let myAge = 20;
// let humanDogRatio = 7;
// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);

// let count = 5;
// count = count + 10;

// let bonusPoints = 50;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);
// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);

// function increment(){
//     console.log("The button was clicked");
// }

// function countdown(){
//     console.log(5);
//     console.log(4);
//     console.log(3);
//     console.log(2);
//     console.log(1);
// }
// countdown();

// function my(){
//     console.log(42);
// }
// my();

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;
// function logLapTime(){
//     let totalTime = lap1 + lap2 + lap3;
//     console.log(totalTime);
// }

// let lapsCompleted = 0;
// function incrementLap(){
//     lapsCompleted = lapsCompleted + 1;
// }
// incrementLap();
// incrementLap();
// incrementLap();
// console.log(lapsCompleted);

//camelCase we cant use dash for variable name
// let countEl = document.getElementById("count-el"); //pass in arguments
// // console.log(countEl);
// let count = 0;
// function increment(){
//     count = count + 1;
//     countEl.innerText = count;
//     // console.log(count);
// }

// function save(){
//     console.log(count);
// }

// let username = "peer";
// // console.log(username);
// let message = "You have three new notifications"
// let messageToUser = message + ", " + username + "!";
// // console.log(message + ", " + username + "!");
// console.log(messageToUser);

// let name = "Per Harald Borgen";
// let greeting = "Hi, my name is ";
// let myGreeting = greeting + name;
// console.log(myGreeting);

// //String vs Number, string always wins.
// let name = 42;
// let greeting = "Hi, my name is ";
// let myGreeting = greeting + name;
// console.log(myGreeting);

// let points = 4;
// let bonusPoints = "10";
// let totalPoints = points + bonusPoints;
// console.log(totalPoints);

// console.log(4 + 5); //9
// console.log("2" + "4"); //"24"
// console.log("5" + 1); //"51"
// console.log(100 + "100"); //100100

// let welcomeEl = document.getElementById("welcome-el");
// let name = "Per Harald Borgen";
// let greeting = "Welcome back ";
// welcomeEl.innerText = greeting + name;
// welcomeEl.innerText += " emoji";

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el"); //pass in arguments
// console.log(countEl);
let count = 0;
function increment(){
    count += 1;
    countEl.textContent = count;
    // console.log(count);
}
function save(){
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}

//Google
//innerText alternative mdn in google such that we use textContent

// let firstName = "Per";
// let lastName = "Borgen";
// let fullName = firstName + " " + lastName;
// console.log(fullName);

// let name = "Linda";
// let greeting = "Hi there";
// function greetLinda(){
//     console.log(greeting + ", " + name + "!");
// }
// greetLinda();

// let myPoints = 3;
// function add3Points(){
//     myPoints += 3;
// }
// function remove1Point(){
//     myPoints -= 1;
// }
// add3Points();
// add3Points();
// add3Points();
// remove1Point();
// remove1Point();
// console.log(myPoints);

// console.log("2" + 2); //"22"
// console.log(11 + 7); //18
// console.log(6 + "5"); //"65"
// console.log("My points: " + 5 + 9); //My points: 59
// console.log(2 + 2); //4
// console.log("11" + "14"); //"1114"
