
function reduce(array, callback, initialValue) {
  let accumulator = initialValue;
  let index = 0;

  // fourth refactor
  if (accumulator === undefined) {
    accumulator = array[0];
    index = 1;
  }
  
  // third refactor
  // if (!accumulator) {
  //   accumulator = array[0];
  //   index = 1;
  // }

  // second refactor
  // if (initialValue) {
  //   accumulator = initialValue;
  // } else {
  //   accumulator = array[0];
  //   index = 1;
  // }

  while (index < array.length) {
    accumulator = callback(accumulator, array[index], index, array);
    index += 1;
  }

  return accumulator

  // first attempt
  // if (initialValue) {
  //   previousValue = initialValue;
  //   for (let index = 0; index < array.length; index += 1) {
  //     let currentValue = array[index];
  //     previousValue = callback(previousValue, currentValue, index, array);
  //   }
  // } else {
  //   previousValue = array[0];
  //   for (let index = 1; index < array.length; index += 1) {
  //     let currentValue = array[index];
  //     previousValue = callback(previousValue, currentValue, index, array);
  //   }
  // }
  
  // return previousValue;
}

let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number));
// => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));
// => ["Curly", "Larry", "Mo"]


const peopleArr  = [
  {
      username:    'glestrade',
      displayname: 'Inspector Lestrade',
      email:       'glestrade@met.police.uk',
      authHash:    'bdbf9920f42242defd9a7f76451f4f1d',
      lastSeen:    '2019-05-13T11:07:22+00:00',
  },
  {
      username:    'mholmes',
      displayname: 'Mycroft Holmes',
      email:       'mholmes@gov.uk',
      authHash:    'b4d04ad5c4c6483cfea030ff4e7c70bc',
      lastSeen:    '2019-05-10T11:21:36+00:00',
  },
  {
      username:    'iadler',
      displayname: 'Irene Adler',
      email:       null,
      authHash:    '319d55944f13760af0a07bf24bd1de28',
      lastSeen:    '2019-05-17T11:12:12+00:00',
  },
];


function keyByUsernameReducer(acc, person, index) {
  // console.log(index);
  // console.log("acc = ");
  // console.log(acc);
  let {username, ...noUserName} = person;
  return {...acc, [person.username]: noUserName};
}

const peopleObj = reduce(peopleArr, keyByUsernameReducer, {});
console.log(peopleObj);