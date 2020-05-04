function convert() {
  let array = [];
  for (let el of arguments) {
    let current = arguments[el];
    array.push(typeof current === 'string' ? Number(current) : String(current));
  }
  return array;
}

function executeforEach(array, callback) {
    for (let el of array) {
        callback(el);
    }
}

function mapArray(array, callback) {
  let transformedArray = [];
  executeforEach(array, function(el) {
    transformedArray.push(callback(Number(el)))
  });
  return transformedArray;
}

function filterArray(array, callback) {
  let transformedArray = [];
  executeforEach(array, el => callback(el) ? transformedArray.push(el) : 0);
  return transformedArray;
}

function containsValue(array, value) {
  let checked = false;
  executeforEach(array, function(el) {
    if (el === value) {
      checked = true;
    }
  });
  return checked;
}

function flipOver(string) {
  let newString = '';
  for (let item of string) {
    newString = item + newString;
  }
  return newString;
}

function makeListFromRange([start, end]) {
  let newArray = [];
  if (start > end) {
      for (let i = end; i <= start; i++){
        newArray.push(i);
      }
  } for (let i = start; i <= end; i++) {
    newArray.push(i);
  }
  return newArray;
}

function getArrayOfKeys(array, key) {
  let newArray = [];
  executeforEach(array, function(el) {
    newArray.push(el[key])
  });
  return newArray;
}

function substitute(array) {
  let newArray = [];
  const more = 10;
  const less = 20;
  mapArray(array, function(el) {
    newArray.push(el > more && el < less ? '*' : el);
  });
  return newArray;
}

function getPastDay(date, number) {
  const day = 24;
  const hour = 3600;
  const mili = 1000;
  return new Date(date.getTime() - number * day * hour * mili).getDate();
}

function formatDate(date) {
  const less = 10;
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours() < less ? '0' + date.getHours() : date.getHours();
  const min = date.getMinutes() < less ? '0' + date.getMinutes() : date.getMinutes();
  return `${year}/${month}/${day} ${hour}:${min}`;
}
