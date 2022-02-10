// // Node Promises Async Await 

function getData() {
  console.log("2. Getting data from the internet, please wait.");
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("3. Returning data from the internet after 5000 milliseconds");
      resolve([{name: "Conor"}, {name: "Chung"}]);
    }, 5000)
  })
}

async function main() {
  console.log("1. Starting Script");
  const data = await getData();
  console.log(`4. Data is currently ${JSON.stringify(data)}`);
  console.log("5. Script Ended");
}

main();


