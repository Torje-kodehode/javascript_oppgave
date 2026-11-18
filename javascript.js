console.log("JavaScript er koblet til!");


// OPPGAVE 2

const studentName = "Torje";
let studentAge = 18;
const isStudent = true;
const colors = ["rød", "grønn", "blå"];

console.log(studentName);
console.log(studentAge);
console.log(isStudent);
console.log(colors);


// OPPGAVE 3

let numberOne = 10;
let numberTwo = 5;

console.log(numberOne + numberTwo);
console.log(numberOne - numberTwo);
console.log(numberOne / numberTwo);
console.log(numberOne * numberTwo);

let numberThree = 10;

numberThree++;
console.log(numberThree);

numberThree--;
console.log(numberThree);

numberThree += 5;
console.log(numberThree);

numberThree -= 5;
console.log(numberThree);


// OPPGAVE 4

let userName = "Torje";
let userAge = 18;
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "";

if (userName !== "" && userAge >= 18 && userIsBlocked === false) {
    userIsLoggedIn = true;
    goToPage = "/home";

    console.log("Welcome " + userName);
} else {
    console.log("Login failed");
}


// OPPGAVE 5

const userMale = false;

const userTitle = userMale ? "Mr." : "Mrs.";

console.log(userTitle);
