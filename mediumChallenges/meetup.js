// Given two strings, a day and a descriptor string "first" "second" "third" ...etc
// return the date of the month that day will occur in the form of a date object .toString

// examples / test cases
// requires class "Meetup"
//    method: constructor
//      parameters: year(int), month(int)
//      output: set a property of date object of the month in the year provided
//    method: day(instance)
//      parameters: weekday(string), descriptor(string) - ex: 'first' 'second' 'third'
//      return: date object based on the weekday and descriptor
//    method (potentially): toString(instance)
//      return: a string that matches the dateAsString result from the test cases

// rules:
// weekdays are given as their full words, case insensitive
// descriptors are case insensitive and can be the following:
//  - 'first', 'second', 'third', 'fourth', 'fifth', 'last', 'teenth'
// 'teenth' facts:
//            there are exactly 7 days in each month that end in '-teenth', one for each day of the week
// 13th, 14th, 15th, 16th, 17th, 18th, 19th
// so Monday the Teenth, could be the 14th if thats a monday, etc.

// Data Structure
// this will rely heavily on the use and manipulation of the built in Date Object

// Algorithm
// class Meetup
//  constructor(year, date)
//    sets a date object property
//  day(day, schedule)
//    returns a date object with the specific day set
//    (most logic in this method)
//    sanitize the arguments
//    starting at day 1, iterate through 1-31 by .setDate()
//    on this object, get the day by .getDay()
//    keep track of the number of specific days
//    when the number of days matches the schedule (first would be 1, fourth would be when we see 4 of the days
//    (teenth would be when the specific day occurs while date is 13-19th inclusive)
//    last:
//      little tricky, in order to get the last day, it would be best to iterate from the end of the month, forwards,
//      and return the date when the getDay matches the day
//      currently I only know that I can set the month 1 forward and iterate using 0 or lower





let Meetup = (() => {
  function getDaysInTheMonth(year, month) {
    let date = new Date(year, month, 1);
    let days = [];
    while (date.getMonth() === month) {
      days.push(date.getDate());
      date.setDate(date.getDate() + 1);
    }
    return days.pop();
  }

  function convertDayOfWeek(day) {
    day = day.toLowerCase();
    return ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'].indexOf(day);
  }
  
  function convertScheduleToNumber(schedule) {
    schedule = schedule.toLowerCase();
    return {
      first: 1,
      second: 2,
      third: 3,
      fourth: 4,
      fifth: 5,
      teenth: 'teenth',
      last: 'last',
    }[schedule];
  }

  return class Meetup {
    constructor(year, month) {
      this.date = new Date(year, month - 1);
    }

    findLast(day) {
      let daysInMonth = getDaysInTheMonth(this.date.getFullYear(), this.date.getMonth());
      let scheduledDate = new Date(this.date.getFullYear(), this.date.getMonth());

      do {
        scheduledDate.setDate(daysInMonth);
        daysInMonth -= 1;
      } while (scheduledDate.getDay() !== day);

      return scheduledDate;
    }

    findFirstThroughFifth(day, schedule) {
      let dayCount = 0;
      let dateNum = 1;
      let scheduledDate = new Date(this.date.getFullYear(), this.date.getMonth());

      while (dayCount !== schedule) {
        scheduledDate.setDate(dateNum);
        if (scheduledDate.getDay() === day) {
          dayCount += 1;
        }
        dateNum += 1;
      }

      return scheduledDate.getMonth() === this.date.getMonth() ? scheduledDate : null;
    }

    findTeenth(day) {
      let teenth = [13, 14, 15, 16, 17, 18, 19];
      let scheduledDate = new Date(this.date.getFullYear(), this.date.getMonth());

      for (let idx = 0; idx < teenth.length; idx += 1) {
        scheduledDate.setDate(teenth[idx]);
        if (scheduledDate.getDay() === day) {
          return scheduledDate;
        }
      }
    }
  
    day(day, schedule) {
      day = convertDayOfWeek(day);
      schedule = convertScheduleToNumber(schedule);

      if ([1, 2, 3, 4, 5].includes(schedule)) return this.findFirstThroughFifth(day, schedule);
      if (schedule === 'last') return this.findLast(day);
      if (schedule === 'teenth') return this.findTeenth(day);
    }
    
  }
})();

module.exports = Meetup;
// function dateAsString(year, month, day) {
//   let date = new Date(year, month - 1, day);
//   return date.toString();
// }

// let meetup = new Meetup(2015, 9);
// let expected = dateAsString(2015, 9, 29);

// console.log(meetup.day('Tuesday', 'fifth').toString());
// console.log(expected);