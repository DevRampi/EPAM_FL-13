function countPoints(results) {
  let points = results.reduce(function(sum, current) {
    if (current[0] > current[2]) {
      return sum + 3;
    } else if (current[0] === current[2] ) {
      return sum + 1;
    } return sum + 0;
  },0);
  return points;
}

countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']);