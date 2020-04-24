let word = prompt('Please, write your word below', '');
let magic = 2;

if (word === null || word === '' || word === undefined) {
  alert('Invalid value');
}
if (word.trim() === '') {
  alert('Invalid value');
}

let even1 = Math.floor((word.length-1)/magic);
let even2 = word.length/magic;
let evenWord = word[even1]+word[even2];
let odd = Math.floor(word.length/magic);
let oddWord = word[odd];

if (word.length%magic === 0) {
  alert(evenWord);
} else {
  alert(oddWord);
}
 
 