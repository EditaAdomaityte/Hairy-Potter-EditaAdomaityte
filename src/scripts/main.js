import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"
import { makePottery } from "./PotteryWheel.js"


// Make 5 pieces of pottery at the wheel
let mug = makePottery('hourglass',3,5)
console.log(mug)
let vase= makePottery('oval',4,10)
console.log(vase)
let plate= makePottery('round',0.7,2)
let fruitBowl=makePottery('hexagon',2.7,9)
let teaCup=makePottery( 'cilinder',0.8,5)


// Fire each piece of pottery in the kiln
firePottery(mug, 2100)
firePottery(vase,1678)
firePottery(plate,2205)
firePottery(fruitBowl,2300)
firePottery(teaCup,1999)

toSellOrNotToSell(mug)
toSellOrNotToSell(vase)
toSellOrNotToSell(plate)
toSellOrNotToSell(fruitBowl)
toSellOrNotToSell(teaCup)

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

