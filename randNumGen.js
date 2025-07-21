//PROJECT 1: RANDOM NUMBER GENERATOR
let randomNum = Math.random() //This generates numbers between 0 and 0.9999
let numBtnZeroAndHundred = randomNum * 101
console.log(numBtnZeroAndHundred) //This genertates numbers between 0 and 99.999

let randomNumRoundToFloor = Math.floor(numBtnZeroAndHundred) //Rounds max value to least whole
console.log(randomNumRoundToFloor) //This generates numbers between 0 and 100