// Logical operators

// && - and means both conditions have to be true in order to happen 
// Майка казва на детето си те ще играеш ако СИ НАПИШЕШ ДОМАЩНАТА И ИЗМИЕШ ЧИНИИТЕ. ( и двете трябва за да играе)

const pass = prompt("Enter your  password");

if (pass.length >= 6 && pass.indexOf(" ") === -1) {
    console.log("Valid password")
} else {
    console.log("Incorrect password")
}


//  || - or means one of the conditions have to be met in order to proceed
// Майка казва на детето си те ще играеш или ако СИ НАПИШЕШ ДОМАЩНАТА или ако ИЗМИЕШ ЧИНИИТЕ. ( едно от двете поне а може и двете ,трябва за да играе)


const yourAge = 90;

if ( (yourAge >=0 && yourAge < 5) || yourAge >=65) {
    console.log("Free");
} else if (yourAge >=5 && yourAge < 10) {
    console.log("10 dollars for you please");
} else if (yourAge >=10 && yourAge < 65) {
    console.log("20 dollars for you please, URUUUUUD");
} else {
    console.log("Invaild age");
}

// ! - NOT means negates the boolean , so if something is true it converts it to false and vice versa


const firstName = prompt("Enter your first name");

if (!firstName) {
    // zashtoto ako ne vkarame nishtu , demek firstName negation !firstName = ' ' blanc space, false
    firstName = prompt("Try Again !!!");
}

// primer

// const age = 0 
// if (!(age >= 0 && age < 5 || age >= 65)) - negating all this
// {
//     consoled.log("You are not a baby or a senior!");
// }

