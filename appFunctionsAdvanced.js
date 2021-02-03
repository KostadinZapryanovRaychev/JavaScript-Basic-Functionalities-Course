//Scope - variable visibility

function collectEggs() {
    let totalEggs = 6;
    console.log(totalEggs);
};

//totalEggs shte go dade undefined shtoto to e samo vuv funkciqta
// console.log(totalEggs); 


//purvo shte pokaje 0 posle kato izpulnim funkciqta shte se updatne i sled tova shte pokaje 6
let allFriends = 0;
function totalFriends() {
    allFriends = 6;
    
};
console.log(allFriends);
totalFriends();
console.log(allFriends);


//if there is a variable defined the same name in the function as outside of it the function wiil reference inside
// variable first . IF we remove it it will reffer the outside one. No conflict
let bird = 'Scarlet Mcaw';

function birdWatch() {
    let bird = 'The great Blue Heron';
}

console.log(bird);

// {

//     everything inside this braces do not exist outside
//     only after execution of the function it exists 
// }

// lexical scope
function bankRobbery() {
    const heroes = ['Spiderman', 'Batman', 'Joker'];
    function cryForHelp() {
        //gornata funkciq nqma dostup do promenlivata color
        // no cryForHelp ima dostup do heros na bankRobbery
        let color = 'purple';
        for (let hero of heroes) {
            console.log(`Please help us , ${hero.toUpperCase()}`)
        }
    }
// tuk tra da runnem funkciqta purvo inache nqma da ima dostup (due to a scoping)
    cryForHelp();
}

bankRobbery();


//Functions expressions  new way of defining a functions 

const kilimovAd = function (x, y) {
    let result = x + y;
    return result;
}

console.log(kilimovAd(6, 18));

//Higher order functions 

function callTwice(func) {
    func();
    func();
};


let myLuckyNum = function () {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
};


// purvoto izvikva resultite ot funkciqta
callTwice(myLuckyNum);
//vtoroto izvikva vednaga funkciqta  myLuckyNum

// callTwice(myLuckyNum());


///// Returning functions /////

function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log("Hi there you win 1000000$");
            console.log("hehehe lucky motherfucker!");
        }
        
    } else {
        return function () {
            console.log("You catch a Virus");
            console.log("You will be highly unhappy");
            console.log("You will be highly unhappy");
            console.log("You will be highly unhappy");
            console.log("You will be highly unhappy");
            console.log("You will be highly unhappy");
            console.log("You will be highly unhappy");
            console.log("You will be highly unhappy");
            console.log("You will be highly unhappy");
            console.log("You will be highly unhappy");

        }
    }
};

const mystery = makeMysteryFunc();

mystery();

// ako chisloto koeto postavim kato stoinost na num e mejdu 50 i 100 funckiqta shte vurne true
//otherwise - false
function isBetween(num) {
    return num >= 50 && num <= 100;
};

//factory function - funkciq koqto shte proizvejda funkciiii
function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
};



const isChild = makeBetweenFunc(0, 18);
// if pass argument of isChild (40) it will return false ; , if we pass 7 it will return true
isChild(15);

const isAdult = makeBetweenFunc(19, 70);
isAdult(56);

const isSenior = makeBetweenFunc(71, 118);
isSenior(65);

//Defining methods
// method is a function which is property of an object.
//mojem da si suzdavame funkcii v obektite i posle da gi polzvame kato metodi

const myMath = {
    PI: 3.145345,
    square: function (num) {
        return num * num;
    },
    cube: function (num) {
        // taka se pishe 3 ta stepen
        return num ** 3;
    },
};
myMath.cube(5);

//keyword THIS - verry important !
//this is used to access things by the method inside the object. Some of its properties.

const cat = {
    name: 'Blue Steele',
    breed: 'grey',
    meow() {
        console.log("MEWMEMWOWOMEWO !");
    }
}

const dog = {
    name: 'Rusty',
    breed: 'blue',
    meow() {

    //accessing the property in an object
        console.log(this.breed);
    }
}
//mewo2 -- dava unfefinied shtot tuka this refers to the window object of DOM 
const mewo2 = dog.meow;
mewo2();


//try/catch statements  ako neshtu eventualno nqma da rabota za da ne spre celqi browser go vkarvame 
//v taq konstrukciq i to sha ni pokaje dali tq raboti a ako ne sled neq koda shte produlji.
// pri asinhronnite funkciii se izpolzva
try {
    //undefined random var or object or something
    whatsupbro.toUpperCase();

} catch {
    console.log("ERRRORRR!!!!")
}

