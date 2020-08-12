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
let input;
let winner;
let tryAgain;

/*------Cached Element References------*/

// You might choose to put your game status here
const resetButton = document.getElementById('resetBtn');
const submitButton = document.getElementById('submitBtn');
const gameCheck = document.getElementById('rightOrWrong');
const firstAns = document.getElementById('userInput1').value;
const secondAns = document.getElementById('userInput2').value;
const thirdAns = document.getElementById('userInput3').value;
const fourthAns = document.getElementById('userInput4').value;

/*------Event Listeners------*/

// This is where you should put the event listener
// for a mouse-click

// document.getElementById('startScreen').addEventListener('click', start);
document.getElementById('resetBtn').addEventListener('click', reset);
document.getElementById('submitBtn').addEventListener('click', isRight);

/*------Functions------*/
init();

//reset the screen to get new Key and Progression
function reset(){
    init();
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
}

// gets a random root note to show up
function getRandomKey (evt){
    let randomKey = keysArray[Math.floor(Math.random() * keysArray.length)]
    document.getElementById('newKey').innerHTML = `${randomKey}`;
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
function isRight(){
    //keyofA progression 1 | 1-5-6-4
    if (randomProg === progressionArray[0] 
    && userInput1.value === "A" 
    && userInput2.value === "E" 
    && userInput3.value === "F#m" || "Gbm" 
    && userInput4.value === "D") {
        console.log (`Nice One`)
    
    
   //key of A progression 2 | 6-2-5-1
    } else if (randomProg === progressionArray[1] 
    && userInput1.value === "F#m" || "Gbm" 
    && userInput2.value === "Bm" 
    && userInput3.value === "E" 
    && userInput4.value === "A") {
        console.log (`Nice One 2`)
         
   //key of A progression 3 | 6-4-1-5
    } else if (randomProg === progressionArray[2]
    && userInput1.value === "F#m" || "Gbm"
    && userInput2.value === "Bm"
    && userInput3.value === "E"
    && userInput4.value === "A") {
        console.log (`Nice One 3`)
    
    // key of A progression 4 | 1-4-6-5
    } else if (randomProg === progressionArray[3]
    && userInput1.value === "A"
    && userInput2.value === "D"
    && userInput3.value === "F#m"
    && userInput4.value === "E") {
        console.log (`Nice One 4`)

    // key of A progression 5 | 1-3-6-4
    } else if (randomProg === progressionArray[4]
        && userInput1.value === "A"
        && userInput2.value === "D"
        && userInput3.value === "F#m"
        && userInput4.value === "E") {
            console.log (`Nice One 5`)
    } else {
        console.log (`Try again`);
    }
}

// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is

