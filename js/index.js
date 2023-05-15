// Exercise One
var firstName = "Este";
var surname = "Ross";
let age = 21;
const subject = "Interactive Development";

let message = "Hello my name is " + firstName + " " + surname + ", I am " + age + " years old and I am studying " + subject;

console.log(message)

// Exercise Two
let numOne = 10
let numTwo = 20
let numThree = 5
let numFour = 2
let answer = 0

answer = numOne + numTwo / numThree * numFour;
console.log(answer)

//Exercise Three
let timmyMoney = 10; // R10 
let susanMoney = 25; // R25 
let timmyTaxRate = 0.15; 
let susanTaxRate = 0.26; 
let timmyTax = timmyMoney * timmyTaxRate; 
let susanTax = susanMoney * susanTaxRate; 
let totalTax = timmyTax + susanTax;

console.log(`The Tax Man will claim R${totalTax.toFixed(2)} from Timmy & Susan`);

//Exercise Four
// Question 1
let johnScore = 85;
let timScore = 70;
let alfieScore = 92;
let gwenScore = 88;
let totalScore = johnScore + timScore + alfieScore + gwenScore;
let averageScore = totalScore / 4;

console.log(`The students average is: ${averageScore}`);

// Question 2
johnScore += 7;
timScore += 7;
alfieScore += 7;
gwenScore += 7;
totalScore = johnScore + timScore + alfieScore + gwenScore;
averageScore = totalScore / 4;

console.log(`The students updated average is: ${averageScore}`);

