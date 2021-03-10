function searchNaive(longString, shortString){var count=0;
  for (let i = 0; i < longString.length; i++) {
    for (let j = 0; j < shortString.length; j++) {
       if(shortString[j]!==longString[i+j]) break;
       if(j===shortString.length-1) count++;
      }
    }
  return count;
}
