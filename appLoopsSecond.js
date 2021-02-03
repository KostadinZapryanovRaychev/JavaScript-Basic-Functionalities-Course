//Writing a guessing game
// tuk napravihme taka che user da vavede validen nomer
let maximum = parseInt(prompt("Enter the maximum number !"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number !"));
};

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let attempts = 1;

let guess = parseInt(prompt("Enter your first guess"));
while (guess !== targetNum) {
    if (guess === 42) break;
    attempts++;
    if (guess > targetNum) {
        guess=parseInt(prompt("Too high! Enter a new guess"));
    } else {
        guess=parseInt(prompt("Too low! Enter a new guess"));
    };
};
if (guess === 2) {
    console.log("Ok, Quitting!");
} else {
    console.log(`You got it! it took you ${attempts} guesses`);
};

//for ... of  - new in JS 
// for (variable of iterable) {
//     statement
// }

const pokerTerms = ['badbeat', 'flush', 'showdown', 'nuts', 'fold', 'bigblind', 'check', 'trips', 'sitout', 'muck'];

for (let terms of pokerTerms) {
    console.log(`It states for ${terms}`);
};

const seatingChart = [
    ['Kristen', 'Erik', 'Namita', 'John'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Keiv'],
    ['Yuma','Sakura','Jack','Erika','Raychev']
];

for (let row of seatingChart) {
    for (let student of row) {
        console.log(student);
    };
};

const testScores = {
    martia:89,
    bogdana:65,
    svetla:33,
    polincetu:92,
    georgi:34,
    stambini:56,
    malkotokoce:77,
    shvepsa:98,
    tedincetu:22,
    goshomazniq:18
}

// for in is as loop iterating trhough object

for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
};

//Object.keys(testScores) shte q prevurne v array s imenata
// Object.values(testScores) array s tochkite
//Object.entries(testScores) nested array s 2 te raboti

// da kajem che iskame avarage i polzvame sledniq metod
let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
}
let avarage = total / scores.length;
console.log(avarage);

