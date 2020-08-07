/*------Constants------*/

// KEYS ARRAY
const keysArray = ["A", "B", "C", "D", "E", "F", "G"];

// CHORDS FOR EACH KEY
const chordsOfKey = [
{
    key: "A",
    chords: ["A", "Bm", "C#m", "D", "E", "F#m", "G#"],    
},
{
    key: "B",
    chords: ["B", "C#m", "D#m", "E", "F#", "G#m", "A#"],
},
{
    key: "C",
    chords: ["C", "Dm", "Em", "F", "G", "Am", "B"],
},
{
    key: "D",
    chords: ["D", "Em", "F#m", "G#m", "G", "Bm", "C#"],
},
{
    key: "E",
    chords: ["E", "F#m", "G#m", "A", "B", "C#m", "D#"],
},
{
    key: "F",
    chords: ["F", "Gm", "Am", "Bb", "C", "Dm", "E"],
},
{
    key: "G",
    chords: ["G", "Am", "Bm", "C", "D", "Em", "F#"],
},
]


//PROGRESSIONS
const progressionArray = ["1", ];


/*------Variables (state)------*/

// Variables might include (board/turn/winner)

let chords = [];

/*------Cached Element References------*/

// You might choose to put your game status here

/*------Event Listeners------*/

// This is where you should put the event listener
// for a mouse-click

/*------Functions------*/


// Some functions you might choose to use:

// gets a random key from the keysArray
// outputs the random key to the screen
function getRandomKey (){ 
}

// gets a random progression from the five most common
function getRandomProg (){
}

// takes the random key and takes the corresponding chords and outputs it be able to press
function getChords(){
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