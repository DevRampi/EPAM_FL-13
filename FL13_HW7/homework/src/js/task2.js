const highNumber = 6,
      defaultPrize = 100,
      increaseCounter = 5,
      increaseMultPrize = 2;

if (confirm('Do you want to play a game?')) {
  let maxNumber = highNumber,
      secretNumber,
      chosenNumber,
      totalPrize = 0,
      maxPrize = defaultPrize,
      possiblePrize,
      playingMark = true,
      checkGameNum = true,
      alertMsg;
  while (playingMark) {
    if (!checkGameNum) {
        maxNumber += increaseCounter;
        maxPrize *= increaseMultPrize;
    }
    if (checkGameNum) {
        checkGameNum = false;
    }
    secretNumber = Math.floor(Math.random() * maxNumber);
    possiblePrize = maxPrize;
    for (let attemptCounter = 3; attemptCounter > 0; attemptCounter--) {
      alertMsg = `Choose a roulette pocket number from 0 to ${maxNumber-1}\n`;
      alertMsg += `Attemps left: ${attemptCounter}\n`;
      alertMsg += `Total prize: ${totalPrize}$\n`;
      alertMsg += `Possible prize on current attempt: ${possiblePrize}$`;
      chosenNumber = Number.parseInt(prompt(alertMsg));
      if (chosenNumber === secretNumber) {
        totalPrize += possiblePrize;
        alertMsg = `Congratulation, you won!   Your prize is: ${totalPrize} $. Do you want to continue?`;
        playingMark = confirm(alertMsg);
        if (!playingMark) {
          alert(`Thank you for your participation. Your prize is: ${totalPrize} $`);
          playingMark = confirm('Do you want to play a game again?');
          maxNumber = highNumber;
          totalPrize = 0;
          maxPrize = defaultPrize;
          checkGameNum = true;
        }
      break;
      } else if (attemptCounter === 1) {
        alert(`Thank you for your participation. Your prize is: ${totalPrize} $`);
        playingMark = confirm('Do you want to play a game again?');
        maxNumber = highNumber;
        totalPrize = 0;
        maxPrize = defaultPrize;
        checkGameNum = true;
        break;
      } else {
        possiblePrize /= increaseMultPrize;
      }
    }
  }
} else {
  alert('You did not become a billionaire, but can.');
}
