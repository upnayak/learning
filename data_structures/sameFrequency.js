// Frequency Counter
function sameFrequency(first, second){
  //Convert to String
  first = first.toString()
  second = second.toString()
  //Initialize counter
  let counter = {}
  //Frequency Counter for first number
  for (let i=0; i<first.length; i++){
      counter[first[i]] ? counter[first[i]]+=1 : counter[first[i]]=1
  }
  
  //check for frequency of second string w.r.t first string
  for(let i=0; i<second.length; i++){
      letter = second[i]
      if(!counter[letter]){
          return false
      } else {
          counter[letter] -= 1
      }
  }
  return true
}


console.log(sameFrequency(1231,13321))
console.log(sameFrequency(1231,1321))
