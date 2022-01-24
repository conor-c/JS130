// Another set of promise notes
// JS is single threaded, it can only do 1 thing at a time

// Before Promises, you could do a workaround by attaching eventListeners to query for certain states
// and pass in callbacks to execute upon the event

let img1 = document.querySelector('.img-1');

img1.addEventListener('load', function() {
  // execute this callback function when img1 has loaded
});

img1.addEventListener('error', function() {
  // execute this callback function something goes wrong
});

// In the above example, there is an error case where the event occurs before the event listener
// is attached, so we needed to check if the img1 was finished loading before adding listeners
// luckily images have a complete property

let img1 = document.querySelector('.img-1');

function loaded() {
  // a function to execute once the image has loaded
}

if (img1.complete) {
  loaded(); // call the function loaded if img1 is done loading
} else {
  img1.addEventListener('load', loaded); // if img1 hasn't loaded, add a listener to execute the loaded function once it has
}

img1.addEventListener('error', function() { // note that this won't catch an error if the error occurs before the event listener is attached
  // still add a error function to execute when an error is detected
});

// When to still use eventListeners? When things can happen multiple times on the same object (like keyup)
// We don't really are about what happens before the listener is attached.

// But eventListeners in the Async situation above, isn't really ideal, ideally we want something like the below

img1.callThisIfLoadedOrWhenLoaded(function () {
  // call this function when loaded
}).orIfFailedCallThis(function() {
  // call this function if the img1 has errored
})

// we also want a way to deal with groups of things at a time like below
whenAllTheseHaveLoaded([img1, img2]).callThis(function() {
  // callback function to execute when the array of imgs have loaded
}).orIfSomeFailedCallThis(function () {
  // callback function to execute if some or all of the imgs have failed to load
});

// the above is kind of a cluster of information, and not very concise, but more so, those functions don't exist natively
// Enter Promises.

// if HTML image elements had a ready() method that returned a Promise, the below would mimic the above

img1.ready() // call the ready method that returns a promise
  .then(function() {
    // function to execute when loaded (resolve)d
  }, function() {
    // function to execute when failed (reject)ed
  });

// and for the case of multiple images
Promise.all([img1.ready(), img2.ready()]) // returns a promise that has resolved or rejected based on the state of the returned img promises from ready
  .then(function() {
    // function to execute if all imgs are resolved (loaded)
  }, function() {
    // function to execute if one or more imgs were rejected
  });

// Notes about a promise
// A promise can only succeed or fail (resolve or reject) once, and once it has done so, it can't switch
// If a promise resolves or rejects before a success/fail callback as added (with .then) the correct callback will still
// be called, event though the "event" ocurred before the callback was added.
// This functionality is useful for async functions because generally we are less interested in the exact time something ocurred,
// and more interested in what to do after the event has ocurred.

// Promise Terminology
// A promise can be in 1 of 4 'states'
// fulfilled - the promise resolved
// rejected - the promise rejected
// pending - the promise has neither resolved or rejected (yet)
// settled - the promise has either resolved or rejected

// In the event that method you are interacting with doesn't return a promise
// you need to create your own promise, this is how you do so
let promise = new Promise((resolve, reject) => {
  // do something, possibly something that is async

  if (/* that thing you did succeeded*/) {
    resolve(/*a value you want passed to the resolve callback*/);
  } else {
    reject(Error(/*error message*/)); // or any value you want, but an error typed is customary
  }
});

// So as we can see above, the promise constructor takes 1 argument, that argument is called
// the 'executor' function, it is in charge of doing "something" and then calling either the resolve,
// or the reject callback function. (the act of calling these functions will make the promise object in a "settled" state)
// But where do these callbacks come from? A method you attach to the Promise object.

promise.then(() => {
  // the first argument is the "resolve" state, and it receives the value passed to it from the callback function 
}, () => {
  // the second argument is the "reject" state, and it receives the value passed to it from the callback function "reject"
});

// both of the arguments taken by the then method are optional. 
// It's important to not that the then method, itself will return a promise object.
// some interesting behaviors about the promise object returned by then

// example without promise
// 1. start a spinner to indicate loading
// 2. Fetch some JSON for a story, which gives us the title, and urls for each chapter
// 3. Add title to the page
// 4. Fetch each chapter
// 5. Add the story to the page
// 6. Stop the spinner
// but also we want to stop the spinner and inform the user of an error if one occurs

// (not a good case for delivering a story, but a common pattern when dealing with APIs) (fetch multiple data, then do something when done)

// Promisifying XMLHttpRequest
// below is a simple function to make a GET request
function get(url) {
  //Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do XHR stuff
    let req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      // onload is called even on 404
      // so important to check status
      if (req.status = 200) {
        // Resolve the promise with the response property of the XMLHttpRequest
        resolve(req.response);
      } else {
        // Something went wrong, so reject with a message
        reject(Error(req.statusText)); // where statusText is a property of the XMLHttpRequest
      }
    };

    // When there is an error at the network level, the .onerror callback is called.
    req.onerror = function() {
      reject(Error("Network Error")); // reject the promise
    };

    // Make the request
    req.send();
  });
}

// Now we made a GET request return a promise, this is how to use it
get('story.json').then(response => {
  console.log("Success!", response);
}, error => {
  console.log("Failed!", error);
})

// Now we can make an HMLHttpRequest with our get function that returns a promise

// thens can be chained, this can be used to transform values, or run additional async actions in sequence

// one way to transform a value is simply by returning the new value
let promise = new Promise(function(resolve, reject) {
  resolve(1); // resolve the promise and pass a value of one
});

promise.then(function(val) {
  console.log(val); // where val is the value promise resolved with
  return val + 2; // this actually returns a promise object that resolves with the value of val + 2
}).then(function(val) {
  console.log(val); // 3
}) // this then method returns a promise object that resolves with a value of undefined
// undefined is what the resolve passes because there was no explicit return value.

// back to the story example..
get('story.json').then(function(response) {
  console.log("Success!", response); // the response is json, but we are getting it as plain text. solution below
})

// chaining thens allow us to parse the json

get('story.json').then(function(response) {
  return JSON.parse(response); //response will be the value that the get promise resolved with
}).then(function(response) {
  console.log("Yay, Json!", response);
})

// then has a nice feature that if the callback takes a single argument you can write it as so
get('story.json').then(JSON.parse).then(function(response) {
  console.log("Yay, JSON!", response);
})

// in fact, if we are going to have to parse the JSON regularly from our get function, we could make a json function
function getJSON(url) {
  return get(url).then(JSON.parse);
}
// this function will return a promise, from then, with a value of JSON.parse(get(url)).


// Now to get a little more complicated
// Queuing asynchronous actions
// when returning a value from a then callback, if you return a value, it returns a promise that is resolved with that value, and will pass
// that to the next then in the chain
// But if you return a promise, or something promise-like (thenable), the next then will wait on it to be resolved, and it will only be called when
// that promise settles

getJSON('story.json').then(function(story) {
  return getJSON(story.chapterUrls[0]);
}).then(function(chapter1) {
  console.log("Got chapter 1", chapter1);
})

// In this situation, we start by making an async request to story.json, this gives us a set of URLs
// that we can request to get individual chapters, then we request the first chapter of those urls, and we return that promise in a pending
// state, Once it resolves the next (and final) then is ran and passed the value of the settled promise.
// Currently, is something went wrong, we have no error handling for if the chapter isn't downloaded

// When a promise is rejected explicitly, or implicitly through an Error, Promise rejections
// skip forward to the next then() method with a rejection callback, or the next catch() (which is equivalent).

// .catch() === .then(undefined, rejectHandler);

// To reiterate, Rejections happen when a promise is explicitly rejected, but also implicitly if an error is thrown in the
// constructor callback

// an example of implicit rejection
let jsonPromise = new Promise((resolve, reject) => {
  //JSON.parse will through an error if its argument is invalid JSON
  resolve(JSON.parse("This will throw a SyntaxError"));
});

jsonPromise.then(data => {
  // this won't occur because jsonPromise will settle as rejected
}).catch(err => {
  // if (it is) jsonPromise rejects, execute this function body
})

// because of this implicit rejection on errors, it's helpful to do promise-related async work inside a promise constructor callback
// (the executor function argument), so any error will become a rejection automatically

// This holds true for errors thrown in a then() callback function

get('/').then(JSON.parse).then(() => {
  // this won't happen because JSON.parse will through an error,
  // and thus return a promise settled in a rejection
}).catch(err => {
  // this will execute because it's the next then method with a rejection callback
})

// Error Handling in the story scenario

getJSON('story.json').then(function(story) {
  return getJSON(story.chapterUrls[0]);
}).then(function(chapter1) {
  addHtmlToPage(chapter1.html);
}).catch(function() {
  addTextToPage("Failed to show chapter");
}).then(function() {
  document.querySelector('spinner').style.display = 'none';
})

// When receiving data from a webserver, it is given in a string, we first must use JSON.parse() to parse
// that string into an object
// 1. Make an async request to get story.json, we get a title and a set of URLs that store the individual chapters, we parse that string into JSON
//  1a. Now return a resolved Promise with the value of story links that equals a JSON object 
// 2. With the new promise, if it resolves, take that JSON object 'story' and attempt to get the chapter located at the first element of
//    the chapterUrls array (chapter 1)
// 3. if that resolves, pass the chapter 1 JSON object to the next then, as the argument 'chapter1'
//    and execute the function 'addHtmlToPage' with the argument of calling the html property of the chapter1 JSON object
//    now chapter 1 is added to the webpage
//  3a. if the promise from calling the first chapter URL doesn't resolve, it looks to the next then with a reject handler
//      it finds the next catch, and adds the text to the page
//  4. Either way, if the request to chapter1 resolves or fails (or even the request to story.json), we will hide the spinner display 

// The four reject situations for getJSON are, 
// 1. the string retrieved from the get function is not parsable
// 2. HTTP error code
// 3. Network Issue
// 4. Implicit Error

// If fetching story.chapterUrls[0] (trying to get the data located at the chapter 1 url)
// it will skip all the resolve paths and jump straight to the next reject handler, in this case our catch
// method, it then continues based on how the catch promise resolves, either to the next resolve handler, or to the next
// reject handler in the case of failure.

// Like try/catch in JS, the error is caught in the above code, so the spinner always gets hidden

// the previous code functions the same as the below, except the above is non-blocking and async
// blocking: when the execution of additional JavaScript in the Node.js process must wait until a non-JavaScript operation completes

try {
  let story = getJSONSync('story.json');
  let chapter1 = getJsonSync(story.chapterUrls[0]);
  addHtmlToPage(chapter1.html);
} catch (e) {
  addTextToPage("Failed to show chapter");
}
document.querySelector('.spinner').style.display = 'none';

// the above is blocking and not async, and it *recovers* from the error
// if you want to catch the error for logging purposes only, you can rethrow

// if we were to edit out getJson function to rethrow:

// from:
function getJSON(url) {
  return get(url).then(JSON.parse);
}
// with rethrow
function getJSON(url) {
  return get(url).then(JSON.parse).catch(err => {
    console.log("getJSON failed for ", url, err);
    throw err;
  });
}

// congrats! we fetched one chapter, but we need all of them.

// a non async way to do it:

try {
  let story = getJSONSync('story.json'); // returns a JSON obj with the title and urls to download each chapter
  addHtmlToPage(story.heading);

  story.chapterUrls.forEach(chapterUrl => {
    let chapter = getJSONSync(chapterUrl);
    addHtmlToPage(chapter.html);
  });

  addTextToPage("All done");
} catch (err) {
  addTextToPage("Error: " + err.message);
}

document.querySelector('.spinner').style.display = 'none';

// currently the above is sync (synchronous) and locks up the browser while things download
// (it also downloads and displays everything as it arrives, instead of wait till everything is downloaded)

// async way
getJSON('story.json').then(story => {
  addHtmlToPage(story.heading);
  // TODO: for every url in story.chapterUrls & display on page
}).then(() => {
  addTextToPage("all done");
}).catch(err => {
  // catch any error thats occurred thus far
  addTextToPage("Error: " + err.message);
}).then(() => {
  // hide the spinner regardless of resolve or reject
  document.querySelector('.spinner').style.display = 'none';
})

// forEach isn't async aware, so we need a way to create a sequence, so the page doesn't display the chapters in whatever
// order they were downloaded
// we can solve this by turning our chapterUrls array into a sequence of promises

// we start the chain by starting with a promise that automatically resolves (so we can just attach .then)

// Example
let story = {
  chapterUrls: ['www.chapter1.com', 'www.chapter2.com'],
}

let sequence = Promise.resolve(); // resolved a promise with undefined

// loop through chapter urls
story.chapterUrls.forEach(chapterUrl => {
  sequence = sequence.then(() => getJSON(chapterUrl)).then(chapter => addHtmlToPage(chapter.html));
})
// this builds a sequence, adding a new promise chain for each chapterUrl, it fetches and displays each chapter
// before moving onto the next one

// the above can be cleaned up a little by using reduce instead of forEach, and building the sequence in reduce
// with an initial value of Promise.resolve

story.chapterUrls.reduce((sequence, chapterUrl) => {
  return sequence.then(() => getJSON(chapterUrl)).then(chapter => addHtmlToPage(chapter.html));
}, Promise.resolve())




// so far the whole program:

getJSON('story.json').then(story => {
  addHtmlToPage(story.heading);

  return story.chapterUrls.reduce((sequence, chapterUrl) => {
    // Once the last chapter's promise is resolved
    return sequence.then(() => {
      // fetch the next chapter
      return getJSON(chapterUrl);
    }).then(chapter => {
      // add that chapter to the page
      addHtmlToPage(chapter.html);
    });
  }, Promise.resolve());
}).then(() => {
  // all chapters have loaded successfully
  addTextToPage("All done");
}).catch(err => {
  // if any promise rejected
  addTextToPage("error: " + err.message);
}).then(() => {
  // always hide the spinner
  document.querySelector('.spinner').style.display = 'none';
})

// Currently this program will get the story.json, then display the heading
// reduce is ultimately going to return the final value of whatever is the return
// if chapterUrls has 2 urls...
// 1. Promise.resolve().then(getJSON(chapter1)).then(addHtmlToPage(chapter1.html)) = a promise with a value of undefined from the last then
// 2. that resolved promise with a value of undefined.then(getJson(chapter2)).then(addHtmlToPage(chapter2.html)) = promise with value undefined
// ultimately the first .then will return a promise that is resolved from the very last chapter (by returning the reduce)
// this will ultimately end up displaying each chapter 1 at a time (and downloading 1 at a time)

// currently this is downloading and displaying 1 at a time
// a better way to do it would be to download everything at once, since browsers are pretty good about downloading
// multiple things at a time

// We can use Promise.all, which will only resolve when the array of promises it's passed have resolved
// it will give you a promise with a value of the array of results with whatever the promises fulfilled to (in the same order)

getJson('story.json').then(story => {
  addHtmlToPage(story.heading);

  // Take an array of promises and wait on them all **
  return Promise.all(
    // Map our array of chapter urls to become an array of chapter json promises
    story.chapterUrls.map(getJSON) // remember that if the callback takes one argument, you can omit
  );
}).then(chapters => {
  // now we have an array of chapter jsons in order
  chapters.forEach(chapter => {
    addHtmlToPage(chapter.html);
  });
  addTextToPage("All done");
}).catch(err => {
  addTextToPage("error: " + err.message);
}).then(() => {
  document.querySelector('.spinner').style.display = 'none';
})

// Now the chapters can download async, but the chapters still only appear once they have all finished downloading
// It would certainly be faster if the chapters began appearing as they finished downloading
// The concern is that they need to stay in order.

// TODO: fetch JSON for all chapters at the same time, create a sequence to add them to the document.

getJSON('story.json')
  .then(story => {
    addHtmlToPage(story.heading);

    // map the array of chapter Urls to an array of json promises
    // this makes sure they are downloaded in parallel
    return story.chapterUrls.map(getJSON)
      .reduce((sequence, chapterPromise) => {
        // using reduce to chain promises together
        return sequence.then(() => chapterPromise) // wait for everything in the sequence so far, then wait for this chapterPromise to arrive
          .then(chapter => addHtmlToPage(chapter.html));
      }, Promise.resolve());
  }).then(() => addTextToPage("All done"))
    .catch(err => {
      addTextToPage("Err: " + err.message);
    }).then(() => {
      document.querySelector('.spinner').style.display = 'none';
    })