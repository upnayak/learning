//Sliding Window 
function maxSumContinuous(arr, num){
    var maxSum = 0;
    for(let i = 0; i< num; i++){
        maxSum += arr[i]
    }
    tempSum=maxSum
    for(let i=num;i<arr.length; i++){
        tempSum = tempSum - arr[i-num] + arr[i]
        if(maxSum<tempSum)
            maxSum=tempSum        
    }
    return maxSum
}

console.log(maxSumContinuous([1,2,3,5,2,5,6,1,1,0,3,11],3))
