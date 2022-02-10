function startCounting() {
  let number = 1;
  return setInterval(() => {
    console.log(number);
    number += 1;
  }, 0)
}

function stopCounting(id) {
  clearInterval(id);
}

let counterId = startCounting();
console.log('sync');
setTimeout(stopCounting, 10, counterId);