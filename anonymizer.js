"use strict";
// use OLOO
const Account = (function() {
  let email;
  let password;
  let firstName;
  let lastName;
  let displayName = (function() {
    //generate display name
  })();

  return {
    init(emailArg, passwordArg, firstNameArg, lastNameArg) {
      // set email, password, firstName, lastName
      // also call anonymizer for display name
      //    Req: 16 character sequence self generated
      email = emailArg;
      password = passwordArg;
      firstName = firstNameArg;
      lastName = lastNameArg;
      // this.displayName = Account.anonymize();
      return this;
    },

    reanonymize(password) {
      // STUB
      // Generate a new 16 character sequence and reassigns it to the
      // display name property if the password provided is valid
      // return true if successfully re-anonymized
      // return "Invalid Password" if the password is not valid.
    },

    resetPassword(oldPass, newPass) {
      // if oldPass is true, reassign password property to newPass
      // return "Invalid Password" if the password provided is not valid
      // return true if successfully reset
    },

    firstName(password) {
      // return the first name of the user if the password is valid
      // return "Invalid Password" if the password is not valid.
    },

    lastName(password) {
      // return the last name of the user if the password is valid
      // return "Invalid Password" if the password is not valid
    },

    email(password) {
      // return the emailname if the password provided is valid.
      // return "Invalid Password" if the password is not valid.
    },

    displayName() {
      // return the displayName
    },
  }
})();



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


let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');

console.log(fooBar.__proto__)
console.log(fooBar)
console.log(fooBar.email)

// console.log(fooBar.firstName);                     // returns the firstName function
// console.log(fooBar.email);                         // returns the email function
// console.log(fooBar.firstName('123456'));           // logs 'foo'
// console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
// console.log(fooBar.displayName);                   // logs 16 character sequence
// console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
// console.log(fooBar.resetPassword('123456', 'abc')) // logs true

// let displayName = fooBar.displayName;
// fooBar.reanonymize('abc');                         // returns true
// console.log(displayName === fooBar.displayName);   // logs false