window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
// script.js
const promises = [
  delay(1),
  delay(2),
  delay(3),
  delay(4),
  delay(5)
];

Promise.any(promises)
  .then(result => {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `The first resolved promise's result: ${result}`;
  })
  .catch(error => {
    console.error('No promises resolved:', error);
  });

function delay(seconds) {
  return new Promise(resolve => {
    const timeout = seconds * 1000;
    setTimeout(() => {
      resolve(seconds);
    }, timeout);
  });
}
