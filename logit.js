// function logIt(string) {
//   console.log(string);
// }

// module.exports = logIt;
// example of exporting 1 item at a time

function logIt(string) {
  console.log(string);
}

function countIt(arrayNum) {
  return arrayNum.reduce((total, current) => {
    return total + current
  }, 0);
}

module.exports = {
  logIt,
  countIt,
}
