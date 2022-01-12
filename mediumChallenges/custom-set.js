// A set is a custom data structure that doesn't allow identical elements
// For this assignment, all elements of the set will be numbers

// examples / test cases
// From the test cases:
// There will be one class `CustomSet` that takes an optional array argument (of nums)
// this class will have the following methods

function removeDuplicates(arr) {
  return arr.reduce((col, val) => {
    if (!col.includes(val)) {
      col.push(val);
    }

    return col;
  }, []);
}

class CustomSet {
  constructor(arr = []) {
    this.collection = removeDuplicates(arr);
  }


  isEmpty() {
    return this.collection.length === 0;
  }

  contains(val) {
    return this.collection.includes(val);
  }

  isSubset(setInstance) {
    return this.collection.every(val => setInstance.contains(val));
  }

  isDisjoint(setInstance) {
    return !this.collection.some(val => setInstance.contains(val));
  }

  isSame(setInstance) {
    return setInstance.isSubset(this) && this.isSubset(setInstance);
  }

  add(val) {
    if (!this.contains(val)) {
      this.collection.push(val);
    }

    return this;
  }

  intersection(setInstance) {
    return new CustomSet(this.collection.filter(val => setInstance.contains(val)));
  }

  difference(setInstance) {
    return new CustomSet(this.collection.filter(val => !setInstance.contains(val)))
  }

  union(setInstance) {
    let unionSet = new CustomSet(this.collection);
    setInstance.collection.forEach(val => unionSet.add(val));

    return unionSet;
  }
}

module.exports = CustomSet;