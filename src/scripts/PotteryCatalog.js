 const potteryForSale = []

export const toSellOrNotToSell = (potteryItem) => {
   
    if (potteryItem.cracked === 'true') {
        return potteryItem;
    }
    potteryItem.price = 0;
    if (potteryItem.Weight >= 6) {
         potteryItem.price = 40; }
    else {
         potteryItem.price = 20; }
    potteryForSale.push(potteryItem);
    return potteryItem;
}


export const usePottery = () => {
    return potteryForSale
}
