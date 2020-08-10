/*------Constants------*/

// CHORDS FOR EACH KEY
const chordsOfKey = [
{
    root: "A",
    chords: ["A", "Bm", "C#m", "D", "E", "F#m", "G#"],    
},
{
    root: "B",
    chords: ["B", "C#m", "D#m", "E", "F#", "G#m", "A#"],
},
{
    root: "C",
    chords: ["C", "Dm", "Em", "F", "G", "Am", "B"],
},
{
    root: "D",
    chords: ["D", "Em", "F#m", "G#m", "G", "Bm", "C#"],
},
{
    root: "E",
    chords: ["E", "F#m", "G#m", "A", "B", "C#m", "D#"],
},
{
    root: "F",
    chords: ["F", "Gm", "Am", "Bb", "C", "Dm", "E"],
},
{
    root: "G",
    chords: ["G", "Am", "Bm", "C", "D", "Em", "F#"],
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


/*------Variables (state)------*/

// Variables might include (board/turn/winner)

let randomKey = [];
let chords = [];
let randomProg = [];

/*------Cached Element References------*/

// You might choose to put your game status here
const resetBtn = document.getElementById("resetBtn");

/*------Event Listeners------*/

// This is where you should put the event listener
// for a mouse-click
// document.querySelector('resetBtn').onClick getRandomKey);

/*------Functions------*/

// ~~get a random key from the keysArray~~
// ~~get a random progression from the progressionArray~~
// ~~get the correct chords that corresponds to they key~~


// get a random root note to show up
function getRandomKey (evt){
    let randomKey = chordsOfKey[Math.floor(Math.random() * chordsOfKey.length)]
    document.getElementById("newKey").innerHTML = `${randomKey.root}`;
    // document.getElementById("newChords").innerHTML = `${randomKey.chords}`;
    return {randomKey};  
}

// gets a random progression from the five most common
function getRandomProg (){
    let randomProg = progressionArray[Math.floor(Math.random() * progressionArray.length)];
    document.getElementById("newProgression").innerHTML = `${randomProg.progression}`;
    return {randomProg};
}

//reset the screen




// Initialization function:
// Where you set your initial state, setting up 
// what the board will look like upon loading

// On-Click function:
// Set up what happens when one of the elements
// is clicked


// Check winner function:
// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so



// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is