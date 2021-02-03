// Objects are collectionsof properties
//property = key + value  example - totalSteps: 74732,

const fitBilData = {
    totalSteps: 74732,
    totalMiles: 312,
    avgCallories: 4273,
    workoutsThisWeek: '5 of 7',
    avgGoodSleep: '2:13'    
};

//accessing elements
// first option
fitBilData["totalSteps"];
// second option
fitBilData.avgCallories;

//* every key we use in an object is converted to a string numbers , booleans everything.

const dog = {
    3213: 'Rusty',
    2312: 'Red'
};

//accessing and changing inside
const midterms = {
    danielle: 96,
    pencho: 45,
    bogdana: 37,
    maria: 104
};

midterms.bogdana = 79;
midterms.maria = "A";

//nested things in objects 
// object with array and other object inside
const myFriend = {
    firstName: 'David',
    age: 46,
    strenghts: [' Music ', 'Art'],
    exams: {
        midterm: 92,
        final: 88
    },
    belive: 'Christian',
    // property = array with objects inside 
    weaksides: [{ power: 92, stamina: 'AAA'}, {courage:22 , magic : 22}],
};



