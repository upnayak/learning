function binarySearch(arr, n){
  let left = 0;
  let right = arr.length;
  while (left<right){
      let mid = Math.round(right-left/2);
      if(arr[mid]===n) return mid
      if(arr[mid]<n){
          left=mid+1;
      }
      else{
          right=mid-1;
      }
  }
  return -1;
}
