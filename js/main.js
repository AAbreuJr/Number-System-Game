/*------Constants------*/

// CHORDS FOR EACH KEY
const chordsOfKey = [
{
    root: "A",
    // chords: ["A", "Bm", "C#m", "D", "E", "F#m", "G#"],    
},
{
    root: "B",
    // chords: ["B", "C#m", "D#m", "E", "F#", "G#m", "A#"],
},
{
    root: "C",
    // chords: ["C", "Dm", "Em", "F", "G", "Am", "B"],
},
{
    root: "D",
    // chords: ["D", "Em", "F#m", "G#m", "G", "Bm", "C#"],
},
{
    root: "E",
    // chords: ["E", "F#m", "G#m", "A", "B", "C#m", "D#"],
},
{
    root: "F",
    // chords: ["F", "Gm", "Am", "Bb", "C", "Dm", "E"],
},
{
    root: "G",
    // chords: ["G", "Am", "Bm", "C", "D", "Em", "F#"],
},
]

//PROGRESSIONS
const progressionArray = [
{
    progression: ["1", "5", "6", "4"],
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

//PROGRESSION ANSWERS FOR EACH KEY



/*------Variables (state)------*/

// Variables might include (board/turn/winner)

let randomKey = [];
let chords = [];
let randomProg = [];
let input;

/*------Cached Element References------*/

// You might choose to put your game status here
const resetButton = document.getElementById('resetBtn');
const submitButton = document.getElementById('submitBtn');
const gameCheck = document.getElementById('rightOrWrong');
let firstAns = document.getElementById('firstAnswer');
let secondAns = document.getElementById('secondAnswer');
let thirdAns = document.getElementById('thirdAnswer');
let fourthAns = document.getElementById('fourthAnswer');

/*------Event Listeners------*/

// This is where you should put the event listener
// for a mouse-click

// document.getElementById('startScreen').addEventListener('click', start);
document.getElementById('resetBtn').addEventListener('click', reset);
// document.getElementById('submitBtn').addEventListener('click', chordCheck);

/*------Functions------*/
init();

//reset the screen to get new Key and Progression
function reset(){
    init();
}

//start screen
function start(){
    init();
}

// Initialization function:
// Where you set your initial state, setting up 
// what the screen will look like upon loading
function init(){
    getRandomKey();
    getRandomProg();
    firstAns.value = '';
    secondAns.value = '';
    thirdAns.value = '';
    fourthAns.value = '';
}

// gets a random root note to show up
function getRandomKey (evt){
    let randomKey = chordsOfKey[Math.floor(Math.random() * chordsOfKey.length)]
    document.getElementById('newKey').innerHTML = `${randomKey.root}`;
    return {randomKey};  
}

// gets a random progression from the five most common
function getRandomProg (evt){
    let randomProg = progressionArray[Math.floor(Math.random() * progressionArray.length)];
    document.getElementById('newProgression').innerHTML = `${randomProg.progression}`;
    return {randomProg};
}


// Check winner function:
// Checks the current state of the board for
// function chordCheck(){
//     if
// }

// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is