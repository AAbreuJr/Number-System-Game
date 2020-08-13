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
const display = document.querySelector('bottom');

/*------Event Listeners------*/

// This is where you should put the event listener
// for a mouse-click

document.getElementById('resetBtn').addEventListener('click', reset);
document.getElementById('submitBtn').addEventListener('click', isRight);

/*------Functions------*/
init();

//reset the screen to get new Key and Progression
function reset(){
    init();
}

function isWrong(){
    userInput1.value = '';
    isRight();
}

// try again, when wrong
function tryAgain(){
    userInput1.value = '';
}

// Initialization function: 
// what the screen will look like upon loading
function init(){
    getRandomKey();
    getRandomProg();
    userInput1.value = '';
    document.getElementById('bottom').innerHTML = '';
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
            playTada();
            console.log (`Nice One 1.1`, playTada())
       
     
   //key of A progression 2 | 6-2-5-1
        } else if (randomProg === progressionArray[1]
        && randomKey === "A"  
        && userInput1.value === "F#m" || "Gbm" 
        && userInput2.value === "Bm" 
        && userInput3.value === "E" 
        && userInput4.value === "A") {
            playTada();
            console.log (`Nice One 1.2`)
         
//    //key of A progression 3 | 6-4-1-5
//     } else if (randomProg === progressionArray[2]
//         && randomKey === "A" 
//         && userInput1.value === "F#m" || "Gbm"
//         && userInput2.value === "D"
//         && userInput3.value === "A"
//         && userInput4.value === "E") {
//             playTada();
//             console.log (`Nice One 1.3`)
    
//     // key of A progression 4 | 1-4-6-5
//     } else if (randomProg === progressionArray[3]
//         && randomKey === "A" 
//         && userInput1.value === "A"
//         && userInput2.value === "D"
//         && userInput3.value === "F#m"
//         && userInput4.value === "E") {
//             playTada();
//             console.log (`Nice One 1.4`)

//     // key of A progression 5 | 1-3-6-4
//     } else if (randomProg === progressionArray[4]
//         && randomKey === "A" 
//         && userInput1.value === "A"
//         && userInput2.value === "D"
//         && userInput3.value === "F#m"
//         && userInput4.value === "E") {
//             playTada();
//             console.log (`Nice One 1.5`)

//     //key of B progression 1 | 1-5-6-4
//     } else if (randomProg === progressionArray[0] 
//         && randomKey === "B" 
//         && userInput1.value === "B" 
//         && userInput2.value === "F#" 
//         && userInput3.value === "G#m" || "Abm" 
//         && userInput4.value === "E") {
//             playTada();
//         console.log (`Nice One 2.1`)
     
//    //key of B progression 2 | 6-2-5-1
//     } else if (randomProg === progressionArray[1]
//         && randomKey === "B" 
//         && userInput1.value === "G#m" || "Abm" 
//         && userInput2.value === "C#m" 
//         && userInput3.value === "F#" 
//         && userInput4.value === "B") {
//             playTada();
//             console.log (`Nice One 2.2`)
         
//    //key of B progression 3 | 6-4-1-5
//     } else if (randomProg === progressionArray[2]
//         && randomKey === "B"
//         && userInput1.value === "G#m" || "Gbm"
//         && userInput2.value === "E"
//         && userInput3.value === "B"
//         && userInput4.value === "F#") {
//             playTada();
//             console.log (`Nice One 2.3`)
    
    // // key of B progression 4 | 1-4-6-5
    // } else if (randomProg === progressionArray[3]
    //     && randomKey === "B"
    //     && userInput1.value === "B"
    //     && userInput2.value === "E"
    //     && userInput3.value === "G#m"
    //     && userInput4.value === "F#") {
    //         playTada();
    //     console.log (`Nice One 2.4`)

    // // key of B progression 5 | 1-3-6-4
    // } else if (randomProg === progressionArray[4]
    //     && randomKey === "B" 
    //     && userInput1.value === "B"
    //     && userInput2.value === "D#m"
    //     && userInput3.value === "G#m"
    //     && userInput4.value === "E") {
    //         playTada();
    //         console.log (`Nice One 2.5`)
    
    // //key of C progression 1 | 1-5-6-4
    // } else if (randomProg === progressionArray[0] 
    //     && randomKey === "C" 
    //     && userInput1.value === "C" 
    //     && userInput2.value === "G" 
    //     && userInput3.value === "Am" 
    //     && userInput4.value === "F") {
    //         playTada();
    //         console.log (`Nice One 2.5`)
 
    // //key of C progression 2 | 6-2-5-1
    // } else if (randomProg === progressionArray[1]
    //     && randomKey === "C"  
    //     && userInput1.value === "Am" 
    //     && userInput2.value === "Dm" 
    //     && userInput3.value === "G" 
    //     && userInput4.value === "C") {
    //         playTada();
    //         console.log (`Nice One 2.5`)
     
    // //key of C progression 3 | 6-4-1-5
    // } else if (randomProg === progressionArray[2]
    //     && randomKey === "C" 
    //     && userInput1.value === "Am"
    //     && userInput2.value === "F"
    //     && userInput3.value === "C"
    //     && userInput4.value === "G") {
    //         playTada();
    //         console.log (`Nice One 2.5`)

    // // key of C progression 4 | 1-4-6-5
    // } else if (randomProg === progressionArray[3]
    //     && randomKey === "C"
    //     && userInput1.value === "C"
    //     && userInput2.value === "F"
    //     && userInput3.value === "Am"
    //     && userInput4.value === "G") {
    //         playTada();
    //         console.log (`Nice One 2.5`)

    // // key of C progression 5 | 1-3-6-4
    // } else if (randomProg === progressionArray[4]
    //     && randomKey === "C"
    //     && userInput1.value === "C"
    //     && userInput2.value === "Em"
    //     && userInput3.value === "Am"
    //     && userInput4.value === "F") {
    //         playTada();
    //         console.log (`Nice One 2.5`)
    
    // //key of D progression 1 | 1-5-6-4
    // } else if (randomProg === progressionArray[0] 
    //     && randomKey === "D" 
    //     && userInput1.value === "D" 
    //     && userInput2.value === "A" 
    //     && userInput3.value === "Bm" 
    //     && userInput4.value === "G") {
    //         playTada();
    //         console.log (`Nice One 2.5`)
 
    // //key of D progression 2 | 6-2-5-1
    // } else if (randomProg === progressionArray[1]
    //     && randomKey === "D"  
    //     && userInput1.value === "Bm" 
    //     && userInput2.value === "Dm" 
    //     && userInput3.value === "G" 
    //     && userInput4.value === "C") {
    //         playTada();
    //         console.log (`Nice One 2.5`)
     
    // //key of D progression 3 | 6-4-1-5
    // } else if (randomProg === progressionArray[2]
    //     && randomKey === "D" 
    //     && userInput1.value === "Bm"
    //     && userInput2.value === "G"
    //     && userInput3.value === "D"
    //     && userInput4.value === "A") {
    //         playTada();
    //         console.log (`Nice One 2.5`)

    // // key of D progression 4 | 1-4-6-5
    // } else if (randomProg === progressionArray[3]
    //     && randomKey === "D"
    //     && userInput1.value === "D"
    //     && userInput2.value === "G"
    //     && userInput3.value === "Bm"
    //     && userInput4.value === "A") {
    //         playTada();
    //         console.log (`Nice One 2.5`)

    // // key of D progression 5 | 1-3-6-4
    // } else if (randomProg === progressionArray[4]
    //     && randomKey === "D"
    //     && userInput1.value === "D"
    //     && userInput2.value === "F#m"
    //     && userInput3.value === "Bm"
    //     && userInput4.value === "G") {
    //         playTada();
    //         console.log (`Nice One 2.5`)

        //key of E progression 1 | 1-5-6-4
    } else if (randomProg === progressionArray[0] 
        && randomKey === "E" 
        && userInput1.value === "E" 
        && userInput2.value === "B" 
        && userInput3.value === "C#m" || "Dbm" 
        && userInput4.value === "A") {
            console.log (`Nice One 5.1`, playTada())
 
    //key of E progression 2 | 6-2-5-1
    } else if (randomProg === progressionArray[1]
        && randomKey === "E"  
        && userInput1.value === "C#m" || "Dbm" 
        && userInput2.value === "F#m" 
        && userInput3.value === "B" 
        && userInput4.value === "E") {
            console.log (`Nice One 5.2`, playTada())
     
    //key of E progression 3 | 6-4-1-5
    } else if (randomProg === progressionArray[2]
        && randomKey === "E" 
        && userInput1.value === "C#m"
        && userInput2.value === "A"
        && userInput3.value === "E"
        && userInput4.value === "B") {
            console.log (`Nice One 5.3`, playTada())

    // key of E progression 4 | 1-4-6-5
    } else if (randomProg === progressionArray[3]
        && randomKey === "E"
        && userInput1.value === "E"
        && userInput2.value === "A"
        && userInput3.value === "C#m"
        && userInput4.value === "B") {
            console.log (`Nice One 5.4`, playTada())

    // key of E progression 5 | 1-3-6-4
    } else if (randomProg === progressionArray[4]
        && randomKey === "E"
        && userInput1.value === "E"
        && userInput2.value === "G#m" || "Abm"
        && userInput3.value === "C#m" || "Dbm"
        && userInput4.value === "A") {
            console.log (`Nice One 5.5`, playTada())
    
    // key of F progression 1 | 1-5-6-4
    } else if (randomProg === progressionArray[0] 
        && randomKey === "F" 
        && userInput1.value === "F" 
        && userInput2.value === "C" 
        && userInput3.value === "Dm" 
        && userInput4.value === "A#" || "Bb") {
            console.log (`Nice One 6.1`, playTada())
     
    //key of F progression 2 | 6-2-5-1
    } else if (randomProg === progressionArray[1]
        && randomKey === "F"  
        && userInput1.value === "Dm" 
        && userInput2.value === "Am" 
        && userInput3.value === "C" 
        && userInput4.value === "F") {
            console.log (`Nice One 6.2`, playTada())
         
    //key of F progression 3 | 6-4-1-5
    } else if (randomProg === progressionArray[2]
        && randomKey === "F" 
        && userInput1.value === "Dm"
        && userInput2.value === "A#" || "Bb"
        && userInput3.value === "F"
        && userInput4.value === "C") {
            console.log (`Nice One 6.3`, playTada())
    
    // key of F progression 4 | 1-4-6-5
    } else if (randomProg === progressionArray[3]
        && randomKey === "F"
        && userInput1.value === "F"
        && userInput2.value === "A#" || "Bb"
        && userInput3.value === "Dm"
        && userInput4.value === "C") {
            console.log (`Nice One 6.4`, playTada())
    
    // key of F progression 5 | 1-3-6-4
    } else if (randomProg === progressionArray[4]
        && randomKey === "F"
        && userInput1.value === "F"
        && userInput2.value === "Am"
        && userInput3.value === "Dm"
        && userInput4.value === "A#" || "Bb") {
            console.log (`Nice One 6.5`, playTada())
    
    // if wrong
    } else {
        console.log(`Nice Try`, tryAgain())
}

}


///////

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
const submitButton = document.getElementById('submitBtn');
const display = document.querySelector('bottom');
let input1 = document.getElementById('userInput1');
let input2 = document.getElementById('userInput2');
let input3 = document.getElementById('userInput3');
let input4 = document.getElementById('userInput4');

/*------Event Listeners------*/

// This is where you should put the event listener
// for a mouse-click

document.getElementById('resetBtn').addEventListener('click', reset);

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
    return {randomKey};  
}

// gets a random progression from the five most common
function getRandomProg (evt){
    let randomProg = progressionArray[Math.floor(Math.random() * progressionArray.length)];
    document.getElementById('newProgression').innerHTML = `${randomProg.progression}`;
    return {randomProg};
}


submitButton.addEventListener('click', function () {
    if 
}


///

function isRight() {
    if (document.getElementById('newKey').innerHTML.includes('A')) {
        keyOfA1();
    } else if (document.getElementById('newKey').innerHTML.includes('B')) {
        keyOfB();
    } else if (document.getElementById('newKey').innerHTML.includes('C')) {
        keyOfC();
    } else if (document.getElementById('newKey').innerHTML.includes('D')) {
        keyOfD();
    } else if (document.getElementById('newKey').innerHTML.includes('E')) {
        keyOfE();
    } else if (document.getElementById('newKey').innerHTML.includes('F')) {
        keyOfF();
    } else if (document.getElementById('newKey').innerHTML.includes('G')) {
        keyOfG();
    } else {
        console.log (`how did you get here`);
    }
}