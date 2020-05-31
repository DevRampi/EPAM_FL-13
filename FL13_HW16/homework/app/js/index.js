const baseUrl = 'http://localhost:3000';
const appContainer = document.getElementById('app-container');
const namee = document.querySelector('.name').value; 
const username = document.querySelector('.username').value; 
const body = { 
  namee, 
  username
};
const typeOfError = 400;

const xhr = new XMLHttpRequest();
xhr.open('GET', baseUrl + '/users');
xhr.responseType = 'json';
xhr.onload = () => {
  console.log(xhr.response);
}
xhr.send();


xhr.open('POST', `${baseUrl}/users`);
xhr.responseType = 'json';
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = () => {
  console.log(xhr.status); 
  if (xhr.status >= typeOfError) {
    console.error(xhr.response);
  } else {
  getUsers(xhr.response);
  }
};
xhr.send(JSON.stringify(body));

function getUsers() {
  console.log(baseUrl);
}