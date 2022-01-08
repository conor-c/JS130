// without using the Date Object, create a clock that you can add or subtract minutes from.
// two clock objects representing the same time should be equal to each other

// Examples / Test Cases
// from the test suite, there should be a Clock class
// this class has three methods, .at that accepts up to two integer arguments
// if only one integer is given, it specifies the hour
// if two arguments are given, the first specifies the hour and the second specifies the minute
// the second / third methods are .add and .subtract that take an integer specifying minutes
// it also would be helpful to have a .toString method that overrides the default behavior
// NOTE: time is in 24 hour time

// Data Structure
// largely should be done through variables and arithmetic
// from the test cases it is apparent that there should be a static shared clock objects
// for any given starting clock

// Algorithm
// 4 static methods
// .at
//  creates a clock object that contains the starting time provided by its arguments
// .toString
//  Returns the string result of the clock objects given time
// .add
//  adds time to the clock object in the form of minutes
//  wraps around at midnight
//    1. take the hours from the clock and convert to minutes
//    2. add the minutes to that number
//    3. with the total minutes, add the argument minutes input
//    4. with the total minutes, take the remainder of that number divided by 1440
//    5. the result is the number of minutes passed midnight
//    6. now break that number down into hours and minutes, and reset the clock
// .subtract
//  subtracts time from the clock object in the form of minutes, be sure
//  to account for midnight
// NOTE: there are 1440 minutes in a day, and minute 0 is midnight

let Clock = (() => {
  const ONE_DAY = 24 * 60;

  function calcMinSinceMidnight(clock) {
    let totalMin = (clock.hours * 60) + clock.minutes;
    return totalMin;
  }

  function createClockFromTotalMin(minSinceMidnight) {
    return new Clock(Math.floor(minSinceMidnight / 60), minSinceMidnight % 60)
  }

  return class Clock {
    constructor(hours, minutes) {
      this.hours = hours;
      this.minutes = minutes;
    } 
  
    static at(hours, minutes = 0) {
      return new Clock(hours, minutes);
    }
  
    toString() {
      let hours = this.hours < 10 ? `0${this.hours}` : `${this.hours}`;
      let minutes = this.minutes < 10 ? `0${this.minutes}` : `${this.minutes}`
      return `${hours}:${minutes}`;
    }
  
    add(minutesChange) {
      let minSinceMidnight = (calcMinSinceMidnight(this) + minutesChange) % ONE_DAY;
      return createClockFromTotalMin(minSinceMidnight);
    }
  
    subtract(minutesChange) {
      let minSinceMidnight = calcMinSinceMidnight(this) - minutesChange;
      while (minSinceMidnight < 0) {
        minSinceMidnight += ONE_DAY;
      }

      return createClockFromTotalMin(minSinceMidnight);
    }

    isEqual(otherClock) {
      return this.hours === otherClock.hours && this.minutes === otherClock.minutes;
    }
  
  }
})();

module.exports = Clock;