// Truthy and Falsy

const userInput = prompt("Enter something");
//everything enherits True or False boolean value in JS 

// Falsy value : 

// false
// 0
// ""(empty string)
// null
// undefined
// NaN


if (userInput) {
// will be converted in his bolean form ( value)
    console.log("Truthy!")
} else {
    console.log("Falsy!")
}