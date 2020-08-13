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

//DISPLAY CORRECT
const correctArr = [
    {
        bottomDisplay: 'Correct! That’s it.',
    },
    {
        bottomDisplay: 'Thats spot on!',
    },
    {
        bottomDisplay: 'Yes, that’s right.',
    },
    {
        bottomDisplay: 'You are quite right.',
    },
]

//DISPLAY INCORRECT
const incorrectArr = [
    {
        bottomDisplay: 'Incorrect! That’s not it.',
    },
    {
        bottomDisplay: 'I’m afraid that’s not quite right.',
    },
    {
        bottomDisplay: 'Nope, that’s wrong.',
    },
    {
        bottomDisplay: 'You are quite wrong.',
    },
]


/*------Variables (state)------*/

// Variables might include (board/turn/winner)

let randomKey = [];
let chords = [];
let randomProg = [];

/*------Cached Element References------*/

// You might choose to put your game status here
const resetButton = document.getElementById('resetBtn');


/*------Event Listeners------*/

// This is where you should put the event listener
// for a mouse-click

document.getElementById('resetBtn').addEventListener('click', reset);
document.getElementById('submitBtn').addEventListener('click', checkGame1);

/*------Functions------*/
init();

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

//audio function
const tada = new Audio('/audio/tada.wav')
function playTada(){
    tada.play();
}

const wrong = new Audio('/audio/wrong.wav')
function playWrong(){
    wrong.play();
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

//RANDOM PARAGRAPH AT THE BOTTOM FOR RIGHT
function getRandomRight(){
    const displayCor = correctArr[Math.floor(Math.random() * correctArr.length)]
    document.getElementById('bottom').innerHTML = `${displayCor.bottomDisplay}`;
}

//RANDOM PARAGRAPH AT THE BOTTOM FOR WRONG
function getRandomWrong(){
    const displayInc = incorrectArr[Math.floor(Math.random() * displayArr.length)]
    document.getElementById('bottom').innerHTML = `${displayInc.bottomDisplay}`;
}


//FUNCTIONS TO MATCH RANDOM WITH THE CORRECT ANSWERS

// Key of A
function checkGame1(){
    if (document.getElementById('newKey').innerHTML === "A" 
    && document.getElementById('newProgression').innerHTML === "1,5,6,4") {
        keyOfAProg1();
    } else if (document.getElementById('newKey').innerHTML === "A" 
    && document.getElementById('newProgression').innerHTML === "6,2,5,1"){
        keyOfAProg2();
    } else if (document.getElementById('newKey').innerHTML === "A" 
    && document.getElementById('newProgression').innerHTML === "6,4,1,5") {
        keyOfAProg3();
    } else if (document.getElementById('newKey').innerHTML === "A" 
    && document.getElementById('newProgression').innerHTML === "1,4,6,5"){
        keyOfAProg4();
    } else if (document.getElementById('newKey').innerHTML === "A" 
        && document.getElementById('newProgression').innerHTML === "1,3,6,4"){
        keyOfAProg5();
    } else {
        checkGame2();
    }
}

//Key of B
function checkGame2(){
    if (document.getElementById('newKey').innerHTML === "B" 
    && document.getElementById('newProgression').innerHTML === "1,5,6,4") {
        keyOfBProg1();
    } else if (document.getElementById('newKey').innerHTML === "B" 
    && document.getElementById('newProgression').innerHTML === "6,2,5,1"){
        keyOfBProg2();
    } else if (document.getElementById('newKey').innerHTML === "B" 
    && document.getElementById('newProgression').innerHTML === "6,4,1,5") {
        keyOfBProg3();
    } else if (document.getElementById('newKey').innerHTML === "B" 
    && document.getElementById('newProgression').innerHTML === "1,4,6,5"){
        keyOfBProg4();
    } else if (document.getElementById('newKey').innerHTML === "B" 
        && document.getElementById('newProgression').innerHTML === "1,3,6,4"){
        keyOfBProg5();
    } else {
        checkGame3();
    }
}

//Key of C
function checkGame3(){
    if (document.getElementById('newKey').innerHTML === "C" 
    && document.getElementById('newProgression').innerHTML === "1,5,6,4") {
        keyOfCProg1();
    } else if (document.getElementById('newKey').innerHTML === "C" 
    && document.getElementById('newProgression').innerHTML === "6,2,5,1"){
        keyOfCProg2();
    } else if (document.getElementById('newKey').innerHTML === "C" 
    && document.getElementById('newProgression').innerHTML === "6,4,1,5") {
        keyOfCProg3();
    } else if (document.getElementById('newKey').innerHTML === "C" 
    && document.getElementById('newProgression').innerHTML === "1,4,6,5"){
        keyOfCProg4();
    } else if (document.getElementById('newKey').innerHTML === "C" 
        && document.getElementById('newProgression').innerHTML === "1,3,6,4"){
        keyOfCProg5()
    } else {
        checkGame4();
    }
}

//Key of D
function checkGame4(){
    if (document.getElementById('newKey').innerHTML === "D" 
    && document.getElementById('newProgression').innerHTML === "1,5,6,4") {
        keyOfDProg1();
    } else if (document.getElementById('newKey').innerHTML === "D" 
    && document.getElementById('newProgression').innerHTML === "6,2,5,1"){
        keyOfDProg2();
    } else if (document.getElementById('newKey').innerHTML === "D" 
    && document.getElementById('newProgression').innerHTML === "6,4,1,5") {
        keyOfDProg3();
    } else if (document.getElementById('newKey').innerHTML === "D" 
    && document.getElementById('newProgression').innerHTML === "1,4,6,5"){
        keyOfDProg4();
    } else if (document.getElementById('newKey').innerHTML === "D" 
        && document.getElementById('newProgression').innerHTML === "1,3,6,4"){
        keyOfDProg5();
    } else {
        checkGame5();
    }
}

//Key of E
function checkGame5(){
    if (document.getElementById('newKey').innerHTML === "E" 
    && document.getElementById('newProgression').innerHTML === "1,5,6,4") {
        keyOfEProg1();
    } else if (document.getElementById('newKey').innerHTML === "E" 
    && document.getElementById('newProgression').innerHTML === "6,2,5,1"){
        keyOfEProg2();
    } else if (document.getElementById('newKey').innerHTML === "E" 
    && document.getElementById('newProgression').innerHTML === "6,4,1,5") {
        keyOfEProg3();
    } else if (document.getElementById('newKey').innerHTML === "E" 
    && document.getElementById('newProgression').innerHTML === "1,4,6,5"){
        keyOfEProg4();
    } else if (document.getElementById('newKey').innerHTML === "E" 
        && document.getElementById('newProgression').innerHTML === "1,3,6,4"){
        keyOfEProg5();
    } else {
        checkGame6();
    }
}

//Key of F
function checkGame6(){
    if (document.getElementById('newKey').innerHTML === "F" 
    && document.getElementById('newProgression').innerHTML === "1,5,6,4") {
        keyOfFProg1();
    } else if (document.getElementById('newKey').innerHTML === "F" 
    && document.getElementById('newProgression').innerHTML === "6,2,5,1"){
        keyOfFProg1();
    } else if (document.getElementById('newKey').innerHTML === "F" 
    && document.getElementById('newProgression').innerHTML === "6,4,1,5") {
        keyOfFProg1();
    } else if (document.getElementById('newKey').innerHTML === "F" 
    && document.getElementById('newProgression').innerHTML === "1,4,6,5"){
        keyOfFProg1();
    } else if (document.getElementById('newKey').innerHTML === "F" 
        && document.getElementById('newProgression').innerHTML === "1,3,6,4"){
        keyOfFProg1();
    } else {
        checkGame7();
    }
}

//Key of G
function checkGame7(){
    if (document.getElementById('newKey').innerHTML === "G" 
    && document.getElementById('newProgression').innerHTML === "1,5,6,4") {
        keyOfGProg1();
    } else if (document.getElementById('newKey').innerHTML === "G" 
    && document.getElementById('newProgression').innerHTML === "6,2,5,1"){
        keyOfGProg1();
    } else if (document.getElementById('newKey').innerHTML === "G" 
    && document.getElementById('newProgression').innerHTML === "6,4,1,5") {
        keyOfGProg1();
    } else if (document.getElementById('newKey').innerHTML === "G" 
    && document.getElementById('newProgression').innerHTML === "1,4,6,5"){
        keyOfGProg1();
    } else if (document.getElementById('newKey').innerHTML === "G" 
        && document.getElementById('newProgression').innerHTML === "1,3,6,4"){
        keyOfGProg1();
    } else {
       console.log(`how...`)
    }
}

//CHECK USER INPUT AGAINST GAME
// Key of: A ||| Progression: 1,5,6,4
function keyOfAProg1 (){
    if (userInput1.value === "A" && userInput2.value === "E" && userInput3.value === "F#m" || "Gbm" && userInput4.value === "D") {
        playTada();
        getRandomRight();
        setTimeout(function(){init();}, 3000);
    } else {console.log(`incorrect, try again`, tryAgain())}
}

// Key of: A ||| Progression: 6,2,5,1
function keyOfAProg2 (){
    if (userInput1.value === "F#m" || "Gbm" && userInput2.value === "Bm" && userInput3.value === "E" && userInput4.value === "A") {
        playTada();
        getRandomRight();
        setTimeout(function(){init();}, 3000);
    } else {console.log(`incorrect, try again`, tryAgain())}
}

// Key of: A ||| Progression: 6,4,1,5
function keyOfAProg3(){
    if (userInput1.value === "F#m" || "Gbm" && userInput2.value === "D" && userInput3.value === "A" && userInput4.value === "E") {
        playTada();
        getRandomRight();
        setTimeout(function(){init();}, 3000);
    } else {console.log(`incorrect, try again`, tryAgain())}
}

// key of: A ||| Progression: 1,4,6,5
function keyOfAProg4(){
    if (userInput1.value === "A" && userInput2.value === "D" && userInput3.value === "F#m" && userInput4.value === "E") {
        playTada();
        getRandomRight();
        setTimeout(function(){init();}, 3000);
    } else {console.log(`incorrect, try again`, tryAgain())}
}

// key of: A ||| Progression: 1, 3, 6, 4
function keyOfAProg5(){
    if (userInput1.value === "A" && userInput2.value === "C#m" || "Dbm" && userInput3.value === "F#m" && userInput4.value === "E") {
        playTada();
        getRandomRight();
        setTimeout(function(){init();}, 3000);
    } else {console.log(`incorrect, try again`, tryAgain())}
}

// Key of: B ||| Progression: 1,5,6,4
function keyOfBProg1 (){
    if (userInput1.value === "B" && userInput2.value === "F#" && userInput3.value === "G#m" || "Abm" && userInput4.value === "E") {
        playTada();
        getRandomRight();
        setTimeout(function(){init();}, 3000);
    } else {console.log(`incorrect, try again`, tryAgain())}
}

// Key of: B ||| Progression: 6,2,5,1
function keyOfBProg2 (){
    if (userInput1.value === "G#m" || "Abm" && userInput2.value === "C#m" && userInput3.value === "F#" && userInput4.value === "B") {
        playTada();
        getRandomRight();
        setTimeout(function(){init();}, 3000);
    } else {console.log(`incorrect, try again`, tryAgain())}
}

// Key of: B ||| Progression: 6,4,1,5
function keyOfBProg3(){
    if (userInput1.value === "G#m" || "Abm" && userInput2.value === "E" && userInput3.value === "B" && userInput4.value === "F#") {
        playTada();
        getRandomRight();
        setTimeout(function(){init();}, 3000);
    } else {console.log(`incorrect, try again`, tryAgain())}
}

// key of: B ||| Progression: 1,4,6,5
function keyOfBProg4(){
    if (userInput1.value === "B" && userInput2.value === "E" && userInput3.value === "G#m" || "Abm" && userInput4.value === "F#" || "Gb") {
        playTada();
        getRandomRight();
        setTimeout(function(){init();}, 3000);
    } else {console.log(`incorrect, try again`, tryAgain())}
}

// key of: B ||| Progression: 1, 3, 6, 4
function keyOfBProg5(){
    if (userInput1.value === "B" && userInput2.value === "D#m" || "Ebm" && userInput3.value === "G#m" || "Abm" && userInput4.value === "E") {
        playTada();
        getRandomRight();
        setTimeout(function(){init();}, 3000);
    } else {console.log(`incorrect, try again`, tryAgain())}
}

// Key of: C ||| Progression: 1,5,6,4
function keyOfCProg1 (){
    if (userInput1.value === "C" && userInput2.value === "G" && userInput3.value === "Am" && userInput4.value === "F") {
        playTada();
        getRandomRight();
        setTimeout(function(){init();}, 3000);
    } else {console.log(`incorrect, try again`, tryAgain())}
}

// Key of: C ||| Progression: 6,2,5,1
function keyOfCProg2 (){
    if (userInput1.value === "Am" && userInput2.value === "Em" && userInput3.value === "G" && userInput4.value === "C") {
        playTada();
        getRandomRight();
        setTimeout(function(){init();}, 3000);
    } else {console.log(`incorrect, try again`, tryAgain())}
}

// Key of: C ||| Progression: 6,4,1,5
function keyOfCProg3(){
    if (userInput1.value === "Am" && userInput2.value === "F" && userInput3.value === "C" && userInput4.value === "G") {
        playTada();
        getRandomRight();
        setTimeout(function(){init();}, 3000);
    } else {console.log(`incorrect, try again`, tryAgain())}
}

// key of: C ||| Progression: 1,4,6,5
function keyOfCProg4(){
    if (userInput1.value === "C" && userInput2.value === "F" && userInput3.value === "Am" && userInput4.value === "G") {
        playTada();
        getRandomRight();
        setTimeout(function(){init();}, 3000);
    } else {console.log(`incorrect, try again`, tryAgain())}
}

// key of: C ||| Progression: 1, 3, 6, 4
function keyOfCProg5(){
    if (userInput1.value === "C" && userInput2.value === "Em" && userInput3.value === "Am" && userInput4.value === "F") {
        playTada();
        getRandomRight();
        setTimeout(function(){init();}, 3000);
    } else {console.log(`incorrect, try again`, tryAgain())}
}

//Key of: D ||| Progression: 1,5,6,4
function keyOfDProg1 (){
    if (userInput1.value === "D" && userInput2.value === "A" && userInput3.value === "Bm" && userInput4.value === "G") {
        playTada();
        getRandomRight();
        setTimeout(function(){init();}, 3000);
    } else {console.log(`incorrect, try again`, tryAgain())}
}

// Key of: D ||| Progression: 6,2,5,1
function keyOfDProg2 (){
    if (userInput1.value === "Bm" && userInput2.value === "F#m" || "Gbm" && userInput3.value === "A" && userInput4.value === "D") {
        playTada();
        getRandomRight();
        setTimeout(function(){init();}, 3000);
    } else {console.log(`incorrect, try again`, tryAgain())}
}

// Key of: D ||| Progression: 6,4,1,5
function keyOfDProg3(){
    if (userInput1.value === "Bm" && userInput2.value === "G" && userInput3.value === "D" && userInput4.value === "A") {
        playTada();
        getRandomRight();
        setTimeout(function(){init();}, 3000);
    } else {console.log(`incorrect, try again`, tryAgain())}
}

// key of: D ||| Progression: 1,4,6,5
function keyOfDProg4(){
    if (userInput1.value === "D" && userInput2.value === "G" && userInput3.value === "Bm" && userInput4.value === "A") {
        playTada();
        getRandomRight();
        setTimeout(function(){init();}, 3000);
    } else {console.log(`incorrect, try again`, tryAgain())}
}

// key of: D ||| Progression: 1, 3, 6, 4
function keyOfDProg5(){
    if (userInput1.value === "D" && userInput2.value === "F#m" || "Gbm" && userInput3.value === "Bm" && userInput4.value === "G") {
        playTada();
        getRandomRight();
        setTimeout(function(){init();}, 3000);
    } else {console.log(`incorrect, try again`, tryAgain())}
}

//Key of: E ||| Progression: 1,5,6,4
function keyOfEProg1 (){
    if (userInput1.value === "E" && userInput2.value === "B" && userInput3.value === "C#m" || "Dbm" && userInput4.value === "A") {
        playTada();
        getRandomRight();
        setTimeout(function(){init();}, 3000);
    } else {console.log(`incorrect, try again`, tryAgain())}
}

// Key of: E ||| Progression: 6,2,5,1
function keyOfEProg2 (){
    if (userInput1.value === "C#m" || "Dbm" && userInput2.value === "F#m" || "Gbm" && userInput3.value === "B" && userInput4.value === "E") {
        playTada();
        getRandomRight();
        setTimeout(function(){init();}, 3000);
    } else {console.log(`incorrect, try again`, tryAgain())}
}

// Key of: E ||| Progression: 6,4,1,5
function keyOfEProg3(){
    if (userInput1.value === "C#m" || "Dbm" && userInput2.value === "A" && userInput3.value === "E" && userInput4.value === "B") {
        playTada();
        getRandomRight();
        setTimeout(function(){init();}, 3000);
    } else {console.log(`incorrect, try again`, tryAgain())}
}

// key of: E||| Progression: 1,4,6,5
function keyOfEProg4(){
    if (userInput1.value === "E" && userInput2.value === "A" && userInput3.value === "C#m" || "Dbm" && userInput4.value === "B") {
        playTada();
        getRandomRight();
        setTimeout(function(){init();}, 3000);
    } else {console.log(`incorrect, try again`, tryAgain())}
}

// key of: E ||| Progression: 1, 3, 6, 4
function keyOfEProg5(){
    if (userInput1.value === "E" && userInput2.value === "G#m" || "Abm" && userInput3.value === "C#m" || "Dbm" && userInput4.value === "A") {
        playTada();
        getRandomRight();
        setTimeout(function(){init();}, 3000);
    } else {console.log(`incorrect, try again`, tryAgain())}
}

//Key of: F ||| Progression: 1,5,6,4
function keyOfFProg1 (){
    if (userInput1.value === "F" && userInput2.value === "C" && userInput3.value === "Dm" && userInput4.value === "A#" || "Bb") {
        playTada();
        getRandomRight();
        setTimeout(function(){init();}, 3000);
    } else {console.log(`incorrect, try again`, tryAgain())}
}

// Key of: F ||| Progression: 6,2,5,1
function keyOfFProg2 (){
    if (userInput1.value === "Dm" && userInput2.value === "Gm" && userInput3.value === "C" && userInput4.value === "F") {
        playTada();
        getRandomRight();
        setTimeout(function(){init();}, 3000);
    } else {console.log(`incorrect, try again`, tryAgain())}
}

// Key of: F ||| Progression: 6,4,1,5
function keyOfFProg3(){
    if (userInput1.value === "Dm" && userInput2.value === "A#" || "Bb" && userInput3.value === "F" && userInput4.value === "C") {
        playTada();
        getRandomRight();
        setTimeout(function(){init();}, 3000);
    } else {console.log(`incorrect, try again`, tryAgain())}
}

// key of: F ||| Progression: 1,4,6,5
function keyOfFProg4(){
    if (userInput1.value === "F" && userInput2.value === "A#" || "Bb" && userInput3.value === "Dm" && userInput4.value === "C") {
        playTada();
        getRandomRight();
        setTimeout(function(){init();}, 3000);
    } else {console.log(`incorrect, try again`, tryAgain())}
}

// key of: F ||| Progression: 1, 3, 6, 4
function keyOfFProg5(){
    if (userInput1.value === "F" && userInput2.value === "Am" && userInput3.value === "Dm" && userInput4.value === "A#" || "Bb") {
        playTada();
        getRandomRight();
        setTimeout(function(){init();}, 3000);
    } else {console.log(`incorrect, try again`, tryAgain())}
}

//Key of: G ||| Progression: 1,5,6,4
function keyOfGProg1 (){
    if (userInput1.value === "G" && userInput2.value === "D" && userInput3.value === "Em" && userInput4.value === "C") {
        playTada();
        getRandomRight();
        setTimeout(function(){init();}, 3000);
    } else {console.log(`incorrect, try again`, tryAgain())}
}

// Key of: G ||| Progression: 6,2,5,1
function keyOfGProg2 (){
    if (userInput1.value === "Em" && userInput2.value === "Am" && userInput3.value === "D" && userInput4.value === "G") {
        playTada();
        getRandomRight();
        setTimeout(function(){init();}, 3000);
    } else {console.log(`incorrect, try again`, tryAgain())}
}

// Key of: G ||| Progression: 6,4,1,5
function keyOfGProg3(){
    if (userInput1.value === "Em" && userInput2.value === "C" && userInput3.value === "G" && userInput4.value === "D") {
        playTada();
        getRandomRight();
        setTimeout(function(){init();}, 3000);
    } else {console.log(`incorrect, try again`, tryAgain())}
}

// key of: G ||| Progression: 1,4,6,5
function keyOfGProg4(){
    if (userInput1.value === "G" && userInput2.value === "C" && userInput3.value === "Em" && userInput4.value === "D") {
        playTada();
        getRandomRight();
        setTimeout(function(){init();}, 3000);
    } else {console.log(`incorrect, try again`, tryAgain())}
}

// key of: G ||| Progression: 1, 3, 6, 4
function keyOfGProg5(){
    if (userInput1.value === "G" && userInput2.value === "Bm" && userInput3.value === "Em" && userInput4.value === "C") {
        playTada();
        getRandomRight();
        setTimeout(function(){init();}, 3000);
    } else {console.log(`incorrect, try again`, tryAgain())}
}

