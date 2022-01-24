// setInterval is not part of the JS spec, but made available in most environments
// setInterval executes a callback function repeatedly at an interval provided in milliseconds
// setInterval returns an ID that can be passed to clearInterval() in order to stop the process

// //example of use:
// function save() {
//   // Send the form values to the server for safekeeping
// }

// // call save() every 10 seconds
// var id = setInterval(save, 10000);

// // Later, like at submission, clear the interval
// clearInterval(id);

let startCounting = (function startCounting() {
  let num = 1;
  return setInterval(() => {
    console.log(num);
    num++;
  }, 1000);
})();


function stopCounting(id) {
  clearInterval(id)
};

stopCounting(startCounting);