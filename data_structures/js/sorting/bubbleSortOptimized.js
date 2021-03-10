function bubbleSortOptimized(arr){
  let noSwaps;
  for (let i=0; i<arr.length; i++) {
    noSwaps = true;
    for (let j=0; j<arr.length-i; j++) {
      if(arr[j]>arr[j+1]){
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;
      }
    }
    //If no swaps for the i th iteration break
    if(noSwaps===true) break
  }
  return arr
}
