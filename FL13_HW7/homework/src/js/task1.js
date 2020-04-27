const inputLenght = 4,
      dayTime = 20;
let checkLogin, checkPassword,
    checkStatus = false,
    date = new Date();

let alertMsgOne = `Canceled.`,
    alertMsgTwo = `I don't know any users having name length less than 4 symbols`,
    alertMsgThree = `I don’t know you`,
    alertMsgFour = `Wrong password`;

do {
  checkLogin = prompt('Please, enter your login', '');
  
  if (!checkLogin) {
    alert(alertMsgOne);
    break;
  } else if (checkLogin.length < inputLenght) {
    alert(alertMsgTwo);
  } else if (checkLogin === 'User' || checkLogin === 'Admin') {
    checkStatus = true;
  } else {
    alert(alertMsgThree);
  }
} while (!checkStatus);

if (checkLogin) {
  do {
    checkStatus = false;
    checkPassword = prompt('Please, enter your password', '');
    if (!checkPassword) {
      alert(alertMsgOne);
      break;
    }
    if (checkLogin === 'User' && checkPassword === 'UserPass') {
      checkStatus = true;
      if (date.getHours() >= dayTime) {
        alert('Good evening, dear User!');
      } else {
        alert('Good day, dear User!');
      } 
    } else if (checkLogin === 'Admin' && checkPassword === 'RootPass') {
      checkStatus = true;
      if (date.getHours() >= dayTime) {
        alert('Good evening, dear Admin!');
      } else {
        alert('Good day, dear Admin!');
      } 
    } else {
      alert(alertMsgFour);
    }
  } while (!checkStatus);
} 
