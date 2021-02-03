
const age = 8;
let random = Math.random();
if (random < 0.5) {
    console.log("Your number is less than 0,5");
}
else if (random > 0.5) {
    console.log("You are donk !");
    console.log(random);
}
else if (random === 0.5) {
    console.log("Impossible !");
    console.log(random);
}
// only one of the both conditions will run
// in usual if only this part here doesn't run in case the condition inside is not met



if (age < 5) {
    console.log("You are baby !");
}
else if (age < 10) {
    console.log("You are a child ! You pay 10 dollars");
// if the first is not met then it is looking for the ELSE IF
}
else {
    console.log("MEH")
}


const dayOfWeek = prompt('Enter a day');

if (dayOfWeek === 'Monday') {
    console.log("UGHHH I HATE MONDAYS")
// if first condition is met no searhing for others
} else if (dayOfWeek === 'Saturday') {
    console.log("YuPPIIIII WE WILL DRINK")
//if first is not it is loooking for ELSE IF and if it is stops here    
} else {
    console.log("MEH")
//if first and second are not met and it any other it does what ELSE states
}

