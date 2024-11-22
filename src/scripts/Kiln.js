export const firePottery = (potteryItem, temp) => {
  potteryItem.fired = true;
  potteryItem.cracked = false;
  if (temp > 2200) {
    potteryItem.cracked = true;
  }
  return potteryItem;
};
