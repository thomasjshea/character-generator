// These generate two variables for common stat generation tactics, "threeDSix" and "fourDSix". You should only use those variable names. 
// Don't use fourDSixRoll or fourDSixRemove. They're there because I didn't write a function. Don't repeat my mistakes. 

// This is for stat generation using simple 3d6 method
var threeDSix = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1)
console.log(threeDSix)

// This is for stat generation using 4d6kh3 method, or roll 3 six sided dice, and keep the highest three
// This starts off rolling 4 d6. Then it sorts the integers and shifts the first one off. Then, it sums the remaining 3 die. 
const initialValue = 0
var fourDSixRoll = [(Math.floor(Math.random() * 6) + 1), (Math.floor(Math.random() * 6) + 1), (Math.floor(Math.random() * 6) + 1), (Math.floor(Math.random() * 6) + 1)]
console.log(fourDSixRoll)
var fourDSixRemove = (fourDSixRoll.sort()).shift()
console.log(fourDSixRoll)
var fourDSix = fourDSixRoll.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
    );
console.log(fourDSix)

// These are variable to assign 6 unique dice rolls to stats

var threeDSixStr = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1)
var threeDSixDex = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1)
var threeDSixCon = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1)
var threeDSixWis = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1)
var threeDSixInt = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1)
var threeDSixCha = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1)