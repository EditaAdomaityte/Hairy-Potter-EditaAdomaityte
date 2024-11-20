import { firePottery } from "./Kiln.js"
import { makePottery } from "./PotteryWheel.js"


// Make 5 pieces of pottery at the wheel
let mug = makePottery('hourglass',1.5,5)
console.log(mug)
let vase= makePottery('oval',2.1,10)
console.log(vase)
let plate= makePottery('round',0.6,2)
let fruitBowl=makePottery('hexagon',2.3,9)
let teaCup=makePottery( 'cilinder',0.8,5)


// Fire each piece of pottery in the kiln
let Mug=firePottery(mug, 2100)
console.log(Mug)

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

