let maxPercentage = 100;
let rounding = 2;
let checkNum = Number(prompt('Please, enter your number', ''));
let percentage = Number(prompt('Please, enter your percentage', ''));
let tipAmount = checkNum * percentage / maxPercentage;
let totalSum = checkNum + tipAmount;


if (!Number.isFinite(checkNum) || !Number.isFinite(percentage) ) {
  alert('Invalid input data');
}
if (checkNum === 0 || percentage === 0) {
  alert('Invalid input data');
}
if (totalSum < 0 || percentage < 0 || percentage > maxPercentage) {
  alert('Invalid input data');
}


let result = `Check number: ${Number(checkNum.toFixed(rounding))}
Tip: ${Number(percentage.toFixed(rounding))}%
Tip amount: ${Number(tipAmount.toFixed(rounding))}
Total sum to pay: ${Number(totalSum.toFixed(rounding))} `;   

alert(result);