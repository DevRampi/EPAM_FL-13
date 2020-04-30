function letterCount(stringOne, stringTwo) {
  let counter = 0; 
  for (let character of stringOne.toLowerCase()) {
    if (character === stringTwo.toLowerCase()) {
      counter++;
    } 
  }
  return counter;
}

letterCount('Maggy', 'g');



