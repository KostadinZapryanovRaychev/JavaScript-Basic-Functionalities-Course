// loop allows us to repeat some code
// fo instance we can print hello 10 times


// FOR loop syntax 

// for (
//  [initialExpression];
//  [condition];
//  [incrementExpression]
// );

for (let i = 1; i <= 20; i++){
    console.log(i);
};

// we will make a loop presenting even numbers 
for (let i = 0; i < 21; i += 2){
    console.log(i);
};
// descending numbers by 10
for (let i =100; i >= 0; i -= 10){
    console.log(i);
};

//Looping over an array
const animals = ['zebra', 'DALIQ', 'unicorn', 'dracon', 'lion', 'tiger', 'snake', 'horse', 'bear', 'rabbit', 'cow', 'elephant', 'STAMBETO', 'eagle', 'donkey', 'forry'];

for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
};
// oposite running of the array

for (i = animals.length - 1; i >= 0; i--){
    console.log(animals[i]);
};

//Nesting loops
// for every ittaration of i we have the full iterations of j
for (let i = 1; i <= 10; i++){
    console.log(`i is: ${i}`);
    for (let j = 1; j < 4; j++){
        console.log(`    j is: ${j}`);
    }
};
// it is usufull when we have nested arrays 
const seatingChart = [
    ['Kristen', 'Erik', 'Namita', 'John'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Keiv'],
    ['Yuma','Sakura','Jack','Erika','Raychev']
];

for (let i = 0; i < seatingChart.length; i++){
    const row = seatingChart[i];
    console.log(`ROW #${i+1}`)
    for (let k = 0; k < row.length; k++) {
        console.log(row[k]);
    }
};

//While loop - as long as the condition inside is true it cycles

let count = 0;
while (count < 10) {
    count++;
    console.log(count);
};
//example of usage
const secretCode = "BabyHippo";
let guess = prompt("enter the secret code");
while (guess !== secretCode) {
    guess=prompt("enter the secret code");
};
// this part runs after we succeed with the secretCode
console.log("Congrats you got the secret!");

//The BREAK keyword
let input=prompt("Hey, say something")

while (true) {
    input = prompt(input);
    if (input === "stop copying me") {
        break;
    };
};
console.log("OK you win!");



