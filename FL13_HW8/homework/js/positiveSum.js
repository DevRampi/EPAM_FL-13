function positiveSum (arr) {
  let positiveArr = arr.reduce(function(sum, current) {
   if (current <= 0) {
     return sum;
   } return sum + current;
},0);
  return positiveArr;
}

positiveSum([1, -1, 0, -3, 5, 7, 0, 0, -5, 5, 5, 4]);
