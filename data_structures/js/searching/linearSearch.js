function linearSearch(arr, n){
  var index=-1
  for(var i=0; i<arr.length; i++){
      if(arr[i]===n) return i
  }
  return index
}
