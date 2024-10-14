console.log(`Find max number using functions`);


let maxNumber;
function getMax(pHolder){
    maxNumber = undefined;
    for (let i = 0; i < pHolder.length; i++) {
                if(maxNumber > pHolder[i]){
                    maxNumber = maxNumber;
                    console.log(maxNumber);
                }else{
                    maxNumber = pHolder[i];
                    console.log(maxNumber);
                }
            }
            return maxNumber;
}