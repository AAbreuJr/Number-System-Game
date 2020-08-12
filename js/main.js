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

/*------Cached Element References------*/

// You might choose to put your game status here
const resetButton = document.getElementById('resetBtn');
const submitButton = document.getElementById('submitBtn');
const gameCheck = document.getElementById('rightOrWrong');
const firstAns = document.getElementById('userInput1').value;
const secondAns = document.getElementById('userInput2').value;
const thirdAns = document.getElementById('userInput3').value;
const fourthAns = document.getElementById('userInput4').value;

// audio files

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
}

//audio function
const tada = new Audio('/audio/tada.wav')
function playTada(){
    setTimeout(()=> {tada.play()}, 100)
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

function isRight(){
    //keyofA progression 1 | 1-5-6-4
    if (randomProg === progressionArray[0]
    && randomKey === "A" 
    && userInput1.value === "A" 
    && userInput2.value === "E" 
    && userInput3.value === "F#m" || "Gbm" 
    && userInput4.value === "D") {
        console.log (`Nice One`, playTada())
     
   //key of A progression 2 | 6-2-5-1
    } else if (randomProg === progressionArray[1]
    && randomKey === "A"  
    && userInput1.value === "F#m" || "Gbm" 
    && userInput2.value === "Bm" 
    && userInput3.value === "E" 
    && userInput4.value === "A") {
        console.log (`Nice One 2`, playTada())
         
   //key of A progression 3 | 6-4-1-5
    } else if (randomProg === progressionArray[2]
    && randomKey === "A" 
    && userInput1.value === "F#m" || "Gbm"
    && userInput2.value === "D"
    && userInput3.value === "A"
    && userInput4.value === "E") {
        console.log (`Nice One 3`, playTada())
    
    // key of A progression 4 | 1-4-6-5
    } else if (randomProg === progressionArray[3]
        && randomKey === "A" 
        && userInput1.value === "A"
        && userInput2.value === "D"
        && userInput3.value === "F#m"
        && userInput4.value === "E") {
            console.log (`Nice One 4`, playTada())

    // key of A progression 5 | 1-3-6-4
    } else if (randomProg === progressionArray[4]
        && randomKey === "A" 
        && userInput1.value === "A"
        && userInput2.value === "D"
        && userInput3.value === "F#m"
        && userInput4.value === "E") {
            console.log (`Nice One 5`, playTada())

    //key of B progression 1 | 1-5-6-4
    } else if (randomProg === progressionArray[0] 
        && randomKey === "B" 
        && userInput1.value === "B" 
        && userInput2.value === "F#" 
        && userInput3.value === "G#m" || "Abm" 
        && userInput4.value === "E") {
        console.log (`Nice One`, playTada())
     
   //key of B progression 2 | 6-2-5-1
    } else if (randomProg === progressionArray[1] 
    && userInput1.value === "F#m" || "Gbm" 
    && userInput2.value === "Bm" 
    && userInput3.value === "E" 
    && userInput4.value === "A") {
        console.log (`Nice One 2`, playTada())
         
   //key of A progression 3 | 6-4-1-5
    } else if (randomProg === progressionArray[2]
    && userInput1.value === "F#m" || "Gbm"
    && userInput2.value === "D"
    && userInput3.value === "A"
    && userInput4.value === "E") {
        console.log (`Nice One 3`, playTada())
    
    // key of A progression 4 | 1-4-6-5
    } else if (randomProg === progressionArray[3]
    && userInput1.value === "A"
    && userInput2.value === "D"
    && userInput3.value === "F#m"
    && userInput4.value === "E") {
        console.log (`Nice One 4`, playTada())

    // key of A progression 5 | 1-3-6-4
    } else if (randomProg === progressionArray[4]
        && userInput1.value === "A"
        && userInput2.value === "D"
        && userInput3.value === "F#m"
        && userInput4.value === "E") {
            console.log (`Nice One 5`, playTada())
    } else {
        console.log (`Try again`, tryAgain());
    }
}