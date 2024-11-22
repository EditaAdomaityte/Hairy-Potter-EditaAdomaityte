let potteryId = 1;

export const makePottery = (shape, weight, height) => {
    let potteryItems = {};
    if (shape && weight && height) {
        potteryItems = {
            Shape: shape,
            Weight: weight,
            height: height,
            id: potteryId++
        }

    } 
    return potteryItems
}

