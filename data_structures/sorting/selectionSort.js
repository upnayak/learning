"""
Store the first element as the smallest value you've seen so far.
Compare this item to the next item in the array until you find a smaller number.
If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
If the "minimum" is not the value (index) you initially began with, swap the two values.
Repeat this with the next element until the array is sorted.
"""

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
