"use strict";

const Account = (function() {
  const DataBase = {};

  function isCorrectPassword(passwordAttempt) {
    return DataBase[this.randomKey].userPassword === passwordAttempt;
  }

  const createDisplayName = function() {
    const displayNameLength = 16;
    let characters = ['1', '2', '3', '4', '5', '6', '7', 
                      '8', '9', 'a', 'b', 'c', 'd', 'e',
                      'f', 'g', 'h', 'i', 'j', 'k', 'l',
                      'm', 'n', 'o','p', 'q', 'r', 's', 
                      't', 'u', 'v', 'w', 'x', 'y', 'z']; //can use a string
    let displayName = '';

    for (let count = 0; count < displayNameLength; count += 1) {
      let randomIdx = Math.floor(Math.random() * characters.length);
      displayName += characters[randomIdx];
    }

    return displayName;
  };

  return {
    init(email, password, firstName, lastName) {
      if (DataBase[Symbol.for(email)] !== undefined) {
        console.log("Error: That email already exists.");
        return;
      }
      this.randomKey = Symbol.for(email);
      DataBase[this.randomKey] = {};
      DataBase[this.randomKey].userEmail = email;
      DataBase[this.randomKey].userPassword = password;
      DataBase[this.randomKey].userFirstName = firstName;
      DataBase[this.randomKey].userLastName = lastName;
      this.displayName = createDisplayName();
      return this;
    },

    reanonymize(password) {
      if (isCorrectPassword.call(this, password)) {
        this.displayName = createDisplayName();
        return true;
      } else {
        return "Invalid Password"
      }
    },

    resetPassword(oldPass, newPass) {
      if (isCorrectPassword.call(this, oldPass)) {
        DataBase[this.randomKey].userPassword = newPass;
        return true;
      } else {
        return "Invalid Password";
      }
    },

    firstName(password) {
      if (isCorrectPassword.call(this, password)) {
        return DataBase[this.randomKey].userFirstName;
      } else {
        return "Invalid Password";
      }
    },

    lastName(password) {
      if (isCorrectPassword.call(this, password)) {
        return DataBase[this.randomKey].userLastName;
      } else {
        return "Invalid Password";
      }
    },

    email(password) {
      if (isCorrectPassword.call(this, password)) {
        return DataBase[this.randomKey].userEmail;
      } else {
        return "Invalid Password";
      }
    },


  }
})();




let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');

// console.log(fooBar.__proto__)
// console.log(fooBar)

console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence

console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
console.log(fooBar.reanonymize('abc'));                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

console.log()
let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.email('abc'));   
console.log()

console.log(fooBar);
console.log(bazQux)

let booBar = Object.create(Account).init('foo@bar.com', '1', 'a', 'a');
console.log(booBar)

console.log(fooBar.firstName('abc'));
console.log(bazQux.email('123456'));  


// class Account {
//   constructor() {

//   }

//   static anonymize() {
//       // return 16 character sequence composed of letters and numbers
//   }

//   static passwordCheck(password) {
//     // check password, execution context issue if static?
//   }

  // init(email, password, firstName, lastName) {
  //   // set email, password, firstName, lastName
  //   // also call anonymizer for display name
  //   //    Req: 16 character sequence self generated
  //   this.email = email;
  //   this.password = password;
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  //   // this.displayName = Account.anonymize();
  // }

//   reanonymize(password) {
//     // STUB
//     // Generate a new 16 character sequence and reassigns it to the
//     // display name property if the password provided is valid
//     // return true if successfully re-anonymized
//     // return "Invalid Password" if the password is not valid.
//   }

//   resetPassword(oldPass, newPass) {
//     // if oldPass is true, reassign password property to newPass
//     // return "Invalid Password" if the password provided is not valid
//     // return true if successfully reset
//   }

//   firstName(password) {
//     // return the first name of the user if the password is valid
//     // return "Invalid Password" if the password is not valid.
//   }

//   lastName(password) {
//     // return the last name of the user if the password is valid
//     // return "Invalid Password" if the password is not valid
//   }

//   email(password) {
//     // return the emailname if the password provided is valid.
//     // return "Invalid Password" if the password is not valid.
//   }

//   displayName() {
//     // return the displayName
//   }
// }