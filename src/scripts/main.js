import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js"
import { PotteryList } from "./PotteryList.js"
import { makePottery } from "./PotteryWheel.js"


let mug = makePottery('Hourglass Mug', 3, 5)
let vase = makePottery('Oval Vase', 4, 10)
let plate = makePottery('Round Plate', 0.7, 2)
let fruitBowl = makePottery('Hexagon Fruit Bowl', 7, 9)
let teaCup = makePottery('Cilinder Tea Cup', 0.8, 5)


// Fire each piece of pottery in the kiln
firePottery(mug, 2100)
firePottery(vase, 1678)
firePottery(plate, 2205)
firePottery(fruitBowl, 2000)
firePottery(teaCup, 2300)

toSellOrNotToSell(mug)
toSellOrNotToSell(vase)
toSellOrNotToSell(plate)
toSellOrNotToSell(fruitBowl)
toSellOrNotToSell(teaCup)

const lisToShow = PotteryList(usePottery())
console.log(lisToShow)
const domElementToUpdate = document.getElementById("potteryList")

domElementToUpdate.innerHTML = `${lisToShow}`


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

