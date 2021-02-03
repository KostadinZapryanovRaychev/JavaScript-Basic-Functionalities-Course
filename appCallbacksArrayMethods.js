//ForEach method cals the function once per element in the array

const myLovelyNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function print(element) {
    console.log(element);
};

print(myLovelyNums[0]);

myLovelyNums.forEach(print);

//this format is more common
myLovelyNums.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el)
    }
});

//map method verry important it generates new array using the returned values from its calling

const doubles = myLovelyNums.map(function (num) {
    return num * 2;
});
//new array e const doubles a pak original array remains myLovelyNums
console.log(doubles);

/////////////////       ARROW FUNCTIONS         ////////////////

const Viktoriq = (x, y) => {
    return x + y;
};

Viktoriq(6, 76);

//simplifying them more 
const isEven = num => (
    num % 2 === 0
);
//even the simplest version of arrow function
const isOdd = num => num % 2 === 0;

//setTimeout intervals
//praskame si nqkvo vreme sled koeto , sled chiito delay da vzeme da se executne neshtu ailqchiii

console.log("Hello !");
setTimeout(()=> {
    console.log("...are you still there !");
//3000 e vtori argument i tova sa miliseconds demek sled 3 sekundi se izpulnqva    
}, 3000);
// tva za jalost nqma da izchaka predishnata ami shte se runne sus purvoto Hello
console.log("Goodbye !");

// na vseki 3 sekundi shte izpulnqva koda vuv funkciqta v slucjaq Math.random
const id = setInterval(() => {
    console.log(Math.random());
}, 3000);
// kato go cuknem tva i shte spre non stopskiq execution na taq funkciq // traq da komentna dolnoto za da vidq kak raboti gornoto
clearInterval(id);

//FIlter method is used when we have some array and we should make a subset of it with some elements
const someRandomCasualArray = [1, 5, 64, 212, 4, 6, 72, 56, 7, 3,37,99,19];

//suzdava nova array i e mn metod za filtrirane po rank na neshtu ili tam ...starata ostava unchanged
someRandomCasualArray.filter(n => {
    return n < 43; 
});

const goodMovies = [

    {
        "title": "The Shawshank Redemption",
        "year": 1994,
        "director": "Frank Darabont",
        "duration": "2h 22min",
        "genre": ["Crime", "Drama"],
        "rate": 9.3
    },

    {
        "title": "Batman",
        "year": 2005,
        "director": "Frank Darabont",
        "duration": "2h 22min",
        "genre": ["Crime", "Drama"],
        "rate": 8.6
    },
    {
        "title": "Blue skies",
        "year": 1999,
        "director": "Frank Darabont",
        "duration": "1h 33min",
        "genre": ["Crime", "Drama"],
        "rate": 4.6
    },
    {
        "title": "I remember you",
        "year": 2001,
        "director": "Frank Darabont",
        "duration": "2h 22min",
        "genre": ["Crime", "Drama"],
        "rate": 7.8
    },
    {
        "title": "Love story",
        "year": 2007,
        "director": "Frank Darabont",
        "duration": "2h 22min",
        "genre": ["Crime", "Drama"],
        "rate": 7.6
    },
    {
        "title": "Shrek",
        "year": 1993,
        "director": "Frank Darabont",
        "duration": "2h 22min",
        "genre": ["Crime", "Drama"],
        "rate": 8.8
    },
    {
        "title": "Final sword",
        "year": 1978,
        "director": "Frank Darabont",
        "duration": "2h 22min",
        "genre": ["Crime", "Drama"],
        "rate": 5.8
    },
    {
        "title": "Untouchable",
        "year": 2012,
        "director": "Frank Darabont",
        "duration": "2h 22min",
        "genre": ["Crime", "Drama"],
        "rate": 8.8
    },
];

// sega shte smesim map and filter kato metodi

//tuk v myFav shte ima array samo ot zaglaviqta na filtriranite filmi s rating nad 6
const myFav = goodMovies.filter(m => m.rate > 6).map(m => m.title);


//every - testva dali dadeni element ivsichkite otgovarqt na nqkvo uslovie i vrushta true ili false
//v zavisimost dali vsichki otgovarqt
//true
someRandomCasualArray.every(numbers => numbers !== 0);
//false
someRandomCasualArray.every(numbers => numbers < 0);

//some is the same but it test if there at least one if there is one that passes the condition
//true
someRandomCasualArray.some(numbers => numbers > 70);

//reduce - ujasen metod mrazq go prosto
//it takes some array and reduce it to a single value at the end of the day
const stupidPrices = [1.66, 1.77, 1.67, 1.65, 1.99, 1.78, 1.34, 1.37, 1.79, 1.29, 2.05];
//  po toq nachin sabirame nai lesno elementite v areq.
let totalPrice = 0;
for (let stupidPrice of stupidPrices) {
    totalPrice += stupidPrice;
};
console.log(totalPrice);

//sashtoto izvrashtenie amas reducer 9 demek sabira purvite dve vrushta sumata subira gi s treto i pak toq cikal
const totalPriceReducer=stupidPrices.reduce((totalPrice, stupidPrice) => {
    return totalPrice + stupidPrice;
});
// mojem dori da specificirame starting point ,second argument - initial value for the reducer
const totalPriceReducers=stupidPrices.reduce((totalPrice, stupidPrice) => {
    return totalPrice + stupidPrice;
    //10 e dopulnitelen argument traq sq da stane tam 28 i kusur
    // ot nego shte zapochne dobavqneto na drugite i toi shte e kupq shte se dobavi kum sumata
}, 10);

//arraow functions and keyword this

const Trionkata = {
    fisrNamer:'Ilian',
    lastNamer: 'Trionov',
    fullName: function () {
       return `${this.fisrNamer}  ${this.lastNamer}`
    }
}
//pokazva cqloto mu ime
Trionkata.fullName();
//but if we replace we will get undefined
const Tedincetu = {
    fisrNamer:'Teodora',
    lastNamer: 'Bojkova',
    fullName: () => {

        // in this case keyword this referes to the window object
       return `${this.fisrNamer}  ${this.lastNamer}`
    }
}
Tedincetu.fullName();




