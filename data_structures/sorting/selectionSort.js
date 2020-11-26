function selectionSort(arr){
    for(var i=0;i<arr.length;i++){
        var lower=i; //Designate the value as minimum
        for(var j=i+1;j<arr.length;j++){
            if(arr[j]<arr[lower]) lower = j // Change the minimum if a smaller value is found
        }
        //Swap if the ith value is different from the arr[minimum]
        if(arr[lower] != arr[i]){
            temp = arr[lower]
            arr[lower] = arr[i]
            arr[i] = temp
        }
    }
    return arr;
}
