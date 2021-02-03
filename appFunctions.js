// Function - reusable piece of code
// defining a function classical way

function funcName() {
    //do something
};

function grumpus() {
    console.log("ughghg ...you again...");
    console.log("I believe you lie to me");
    console.log("but you're cute girl");
};

//executions of an function
grumpus();

//arguments in a function
// we pass argument and everytime we difine it has its impact on it
//posle kato q puskame person traq da e v kavichki za da go poznae kato string !
function greet(person) {
    console.log(`Hi,${person} ! Welcome to the jungle!!`);
};

//order in arguments matters 
function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++){
        result += str;
    }
    console.log(result);
};

repeat('Svogii ', 10);

// return keyword - to write a function which catches concrete results

function add(x, y) {
    let sum = x + y;
    return sum;
};

let zina = add(6, 8);

//when a function encouters RETURN it stops ! 
// I love you --- will never be run ! 

// function add(x, y) {
//     let sum = x + y;
//     return sum;
//     console.log("I Love you !")
// };





