import { usePottery } from "./PotteryCatalog.js"


const list = usePottery()
console.log (list)
export const PotteryList = () => {
    let toSellListHTML = '';

    for (const item of list) {
        toSellListHTML += `
          <section class="pottery" id="pottery--1">
            <h2 class="pottery__shape">${item.Shape}</h2>
                 <div class="pottery__properties">
                     Item weighs ${item.Weight} grams and is ${item.height} cm in height
                 </div>
                  <div class="pottery__price">Price is ${item.price}$
                </div>
        </section>
        `

    }return toSellListHTML
}