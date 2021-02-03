//default parameters
// toku shto predadohme defaultparameter koito moje i da smenqme . no ako ne slojil nishtu v skobite kolko da e zara toi sha e 6
//if we work with several parameters they have to come after first 
function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
};

// spread operator ...
const weAreFriends = [1, 4534, 5, 45, 7656, 44, 556, 676, 44, 223, 3, 464];
// inache ne gi razponava 
Math.max(...weAreFriends);
// for creating a coppy 

const dataFromForm = { 
    email: 'blueman@SpeechGrammarList.com',
    password: 'tobias123',
    username: 'tfunke'
}
//adnahme novi propertieta na obekta dataFromForm
const newUser = { ...dataFromForm, id: 42342, isDmine: false };
//tuka sha prevurne parametrite na funkciqta v array - inache reduce ne raboti
//rest operator means we collect things in
function sum(...nums) {
    return nums.reduce((total,el)=>total+el)
};
//array destuction
const scores = [1, 3, 5, 62, 434, 32, 435, 543, 342, 563, 34, 35, 345];
//demek krasi=1 , georgi =3
const [krasi, georgi] = scores;










