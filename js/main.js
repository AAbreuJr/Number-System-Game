/*------Constants------*/

// KEYS ARRAY
const keysArray = ["A", "B", "C", "D", "E", "F", "G"];

//PROGRESSIONS
const progressionArray = [
{
    progression1564: ["1", "5", "6", "4"],
},
{
    progression6251: ["6", "2", "5", "1"],
},
{
    progression6415: ["6", "4", "1", "5"],
},
{
    progression1465: ["1", "4", "6", "5"],
},
{
    progression1364: ["1", "3", "6", "4"],
}
];

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

/*------Variables (state)------*/

// Variables might include (board/turn/winner)

let randomKey = [];
let chords = [];
let randomProg = [];

/*------Cached Element References------*/

// You might choose to put your game status here


/*------Event Listeners------*/

// This is where you should put the event listener
// for a mouse-click


/*------Functions------*/

// ~~get a random key from the keysArray~~
// ~~get a random progression from the progressionArray~~
// get the correct chords that corresponds to they key

function getRandomKey (){
    let randomKey = keysArray[Math.floor(Math.random() * keysArray.length)]
    return randomKey
}

// gets a random progression from the five most common
function getRandomProg (){
    let randomProg = progressionArray[Math.floor(Math.random() * progressionArray.length)];
    return randomProg;
}

// takes the random key and takes the corresponding chords and outputs it be able to press
function getChords (){
    // take the random generated randomKey string and compare to the chordsOfKey[i].root
    
    // if true return chordsOfKey[i].chords
}




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