// RACE DAY

// Step 1
let raceNumber = Math.floor(Math.random() * 1000);
// console.log(raceNumber);

// Step 2
let earlyRegistration = false;

// Step 3
let runnersAge = 18
// console.log(runnersAge);

// Step 4
if (runnersAge > 18) {raceNumber += 1000 ;}
// console.log(raceNumber);

// Step 5
if (runnersAge > 18 && earlyRegistration === true) {console.log (`Your race will begin at 9:30a and your race number is ${raceNumber}.`);}

// Step 6
else if (runnersAge > 18 && earlyRegistration != true) {console.log (`Your race will begin at 11:00a and your race number is ${raceNumber}.`);}

// Step 7
if (runnersAge < 18) {console.log (`Your race will begin at 12:30p and your race number is ${raceNumber}.`);}

// Instructions for 18 years old not displayed in project so far, adding my own.
if (runnersAge === 18) {console.log (`Your race number is ${raceNumber}, you can start at either 11:00a with the late registration adults or at 12:30p with the youth.`);}

