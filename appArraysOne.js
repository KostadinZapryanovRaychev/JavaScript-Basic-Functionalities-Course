// conected data structures ---> array - ordered collection of values


// to make an mepty array
let students = [];

//An array of strings 
let colors = ['red', 'orange', 'yellow'];

//An array of numbers
let lottoNums = [19, 33, 53, 65, 7];

// A mixed array
let stuff = [true, 65, 'cat', null];


//accessing element of an array
stuff[0];
// this way we accessed the element - true
stuff[2][2];
// this way we accessed the element - 'cat' , capital 't' - 2nd alement of this string 'cat'

// reassigning the value of 2 nd element of the array
stuff[1] = 45; 

//array mathods

let movieLine = ['tom', 'nancy'];

movieLine[2] = 'pablo';
// adding with push 2 people at the end of the array (updating the array)
movieLine.push('oliver', 'steven');

// removing with pop last element/s from an array
movieLine.pop();
// we can save this at the variable
let person = movieLine.pop();

//removing FIRST element - shift
let goodPeople = ['Koceto', 'Bogdana', 'Teodora', 'Pencho', 'Shvepsa', 'Icaka'];

let betterPeople = goodPeople.shift();
//adding new element at the begging of an array - unshift
goodPeople.unshift('Koceto Raychev');

//different methords
let methodOne = ['Koceto', 'Bogdana', 'Teodora', 'Pencho', 'Shvepsa', 'Icaka'];
let methodTwo = ['Mecho', 'Klecho', 'Shisho', 'Misho', 'Vasko', 'Lasko'];
let methodThree = ['Koceto', 'Bogdana', 'Teodora', 'Pencho', 'Shvepsa', 'Icaka'];
let methodFour = ['Koceto', 'Bogdana', 'Teodora', 'Pencho', 'Shvepsa', 'Icaka'];
let methodFive = ['Koceto', 'Bogdana', 'Teodora', 'Pencho', 'Shvepsa', 'Icaka'];
let methodSix = ['Koceto', 'Bogdana', 'Teodora', 'Pencho', 'Shvepsa', 'Icaka'];

let almostFriends = methodOne.concat(methodTwo);
// dali sadarja daaden element proverka return true or false
//ture
almostFriends.includes('Koceto'); 
//false
almostFriends.includes('Raychev');
// koi nomer element e daden element
// - 1 ako go nqma
methodTwo.indexOf('Bogdana');
// 1
methodTwo.indexOf('Klecho');
// reverse
methodThree.reverse();
//slice reje nqkva chast kakto zadadem i mojem da q seifame v nova array
let newArray = methodFour.slice(2, 4);
let newArray2 = methodFour.slice(3);

//splice e nqkva gadost toi e destructive 
// (3 e indexa ot koito zapochvame i shte smenqme , 1 pokazava che deletvame 1 element) Ubihme Pencho
methodFive.splice(3, 1,);
// sq sha deletvame i vkarvame value bettwen to napravo updatva methodSix
let newArray3 = methodSix.splice(1, 0, 'na Icaka bashta mu');
// array sort method by defailt it converts the array to string and compares UTF 16 code of them
let scores = [1, 60, 453, 2599, 9, -1, 0, 34];
scores.sort();
//zatova traq da pishem funckiii v toq metod

// [1,2] tva na edin adrress
// [1,2] tva e na drug adres
// [1,2] === [1,2] e false shtot JS comapres the references of memory address for the arrays and not their values
//noooo 
let nums = [1, 2, 3, 4];
let numsCopy = nums;
// numsCopy referira vsushnost drugo ime na sashtata chast ot pametta kadeto e nums demek
//ako pushem v numsCopy neshtu to sha promeni i nums
//true
numsCopy === nums; 

//Nested arrays

const coolColors = [

    ['blue', 'green'],
    ['yellow', 'gris'],
    ['black', 'red'],
    ['brown', 'violet']
];


//tick tack too board

const tickTackBoard = [

    ['0', null,'X'],
    [null, 'X','0'],
    ['X', '0',null]
    
];



