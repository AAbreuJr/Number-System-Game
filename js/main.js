/*------Constants------*/

// Array of keys
const keysArray = ["A", "B", "C", "D", "E", "F", "G"]

//PROGRESSIONS
const progressionArray = [
{
    progression:["1", "5", "6", "4"],
},
{
    progression: ["6", "2", "5", "1"], 
},
{
    progression: ["6", "4", "1", "5"],
},
{
    progression: ["1", "4", "6", "5"],
},
{
    progression: ["1", "3", "6", "4"],
}
];

/*------Variables (state)------*/

// Variables might include (board/turn/winner)

let randomKey = [];
let chords = [];
let randomProg = [];
let winner;
const newProg = "";
const newKey = ""

/*------Cached Element References------*/

// You might choose to put your game status here
const resetButton = document.getElementById('resetBtn');
const display = document.querySelector('bottom');
let input1 = document.getElementById('userInput1');
let input2 = document.getElementById('userInput2');
let input3 = document.getElementById('userInput3');
let input4 = document.getElementById('userInput4');

/*------Event Listeners------*/

// This is where you should put the event listener
// for a mouse-click

document.getElementById('resetBtn').addEventListener('click', reset);
document.getElementById('submitBtn').addEventListener('click', checkGame1);

/*------Functions------*/
init();

//reset the screen to get new Key and Progression
function reset(){
    init();
}

// try again, when wrong
function tryAgain(){
    userInput1.value = '';
    userInput2.value = '';
    userInput3.value = '';
    userInput4.value = '';
}

// Initialization function: 
// what the screen will look like upon loading
function init(){
    getRandomKey();
    getRandomProg();
    userInput1.value = '';
    userInput2.value = '';
    userInput3.value = '';
    userInput4.value = '';
    document.getElementById('bottom').innerHTML = '';
}

//audio function
const tada = new Audio('/audio/tada.wav')
function playTada(){
    setTimeout(()=> {tada.play()}, 100)
}

// gets a random root note to show up
function getRandomKey (evt){
    const randomKey = keysArray[Math.floor(Math.random() * keysArray.length)]
    document.getElementById('newKey').innerHTML = `${randomKey}`;
}

// gets a random progression from the five most common
function getRandomProg (evt){
    let randomProg = progressionArray[Math.floor(Math.random() * progressionArray.length)];
    document.getElementById('newProgression').innerHTML = `${randomProg.progression}`;
}

function checkGame1(){
    if (document.getElementById('newKey').innerHTML === "A" 
    && document.getElementById('newProgression').innerHTML === "1,5,6,4") {
        console.log(`1 yep`);
    } else if (document.getElementById('newKey').innerHTML === "A" 
    && document.getElementById('newProgression').innerHTML === "6,2,5,1"){
        console.log(`2 yep`);
    } else if (document.getElementById('newKey').innerHTML === "A" 
    && document.getElementById('newProgression').innerHTML === "6,4,1,5") {
        console.log(`3 yep`);
    } else if (document.getElementById('newKey').innerHTML === "A" 
    && document.getElementById('newProgression').innerHTML === "1,4,6,5"){
        console.log(`4 yep`);
    } else if (document.getElementById('newKey').innerHTML === "A" 
        && document.getElementById('newProgression').innerHTML === "1,3,6,4"){
            console.log(`5 yep`);
    } else {
        checkGame2();
    }
}

function checkGame2(){
    if (document.getElementById('newKey').innerHTML === "B" 
    && document.getElementById('newProgression').innerHTML === "1,5,6,4") {
        console.log(`1 B yep`);
    } else if (document.getElementById('newKey').innerHTML === "B" 
    && document.getElementById('newProgression').innerHTML === "6,2,5,1"){
        console.log(`2 B yep`);
    } else if (document.getElementById('newKey').innerHTML === "B" 
    && document.getElementById('newProgression').innerHTML === "6,4,1,5") {
        console.log(`3 B yep`);
    } else if (document.getElementById('newKey').innerHTML === "B" 
    && document.getElementById('newProgression').innerHTML === "1,4,6,5"){
        console.log(`4 B yep`);
    } else if (document.getElementById('newKey').innerHTML === "B" 
        && document.getElementById('newProgression').innerHTML === "1,3,6,4"){
            console.log(`5 B yep`);
    } else {
        checkGame3();
    }
}

function checkGame3(){
    if (document.getElementById('newKey').innerHTML === "C" 
    && document.getElementById('newProgression').innerHTML === "1,5,6,4") {
        console.log(`1 C yep`);
    } else if (document.getElementById('newKey').innerHTML === "C" 
    && document.getElementById('newProgression').innerHTML === "6,2,5,1"){
        console.log(`2 C yep`);
    } else if (document.getElementById('newKey').innerHTML === "C" 
    && document.getElementById('newProgression').innerHTML === "6,4,1,5") {
        console.log(`3 C yep`);
    } else if (document.getElementById('newKey').innerHTML === "C" 
    && document.getElementById('newProgression').innerHTML === "1,4,6,5"){
        console.log(`4 C yep`);
    } else if (document.getElementById('newKey').innerHTML === "C" 
        && document.getElementById('newProgression').innerHTML === "1,3,6,4"){
            console.log(`5 C yep`);
    } else {
        checkGame4();
    }
}
