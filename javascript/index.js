const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
    let mins = chronometer.computeTwoDigitNumber(chronometer.getMinutes()).split('') 
    console.log(mins)
    minDecElement.innerText = mins[0]
    minUniElement.innerText = mins[1]
}

function printSeconds() {
    let secs = chronometer.computeTwoDigitNumber(chronometer.getSeconds()).split('')
    secDecElement.innerText = secs[0]
    secUniElement.innerText = secs[1]
}

// ==> BONUS
function printMilliseconds() {
  g
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {

}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', 
(event) => {
 // if (event.target.innerText === null){
  //chronometer.start()} else {chronometer.stop()}

  printSeconds()

  btnLeftElement.classList.toggle("stop");
  btnLeftElement.classList.toggle("start");
  btnRightElement.classList.toggle("split");
  btnRightElement.classList.toggle("reset");
  
  if (btnLeftElement.innerText === "STOP"){
    chronometer.stop()
    btnLeftElement.innerText = "START" 
  } else {
    btnLeftElement.innerText = "STOP"
    chronometer.start(printTime)
    
  }

  if (btnRightElement.innerText === "SPLIT"){  
    btnRightElement.innerText = "RESET"
  } else {
    btnRightElement.innerText = "SPLIT"
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', 
(event) => {
  if (btnRightElement.innerText === "RESET"){
    chronometer.reset()
    btnRightElement.innerText = "SPLIT"
  } else {
    btnRightElement.innerText = "RESET"
  }
});
