let potteryId=1;

const makePottery=(shape,weight,height)=>{
    let potteryItem="";
    if (shape && weight && height){
        potteryItem=`<ol>
            <li>'Shape: ${shape}'</li>
            <li>'Weight: ${weight}'</li>
            <li>'Height: ${height}'</li>
            <li>'Id:${potteryId+1}</li>
            </ol>`
    }return potteryItem
}

console.log (makePottery("hourglass",1.5,2))