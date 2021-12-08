// system composed of:
// item creator 
//  - makes sure all necessary information is present and valid
// item manager
//  - creating items
//  - updating information about items
//  - deleting items
//  - querying information about items
// reports manager
//  - generates report about specific item, or ALL items
//  - reports for specific items are generated from report OBJECTS
//    created from the report manager, report manager responsible
//    for reports of all items.


// Required information for an item -- item creator
// If any of the require information provided is not valid,
// the item creator returns an object with a notValid property with a value of true. 
  // SKU code: This is the unique identifier for a product. It 
  // consists of the first 3 letters of the item and the first 
  // 2 letters of the category. If the item name consists of 
  // two words and the first word consists of two letters only, 
  // the next letter is taken from the next word.

  // Item name: This is the name of the item. It must consist of
  // a minimum of 5 characters. Spaces are not counted as characters.

  // Category: This is the category that the item belongs to. It
  // must consist of a minimum of 5 characters and be only one word.
  
  // Quantity: This is the quantity in stock of an item. This must
  // not be blank. You may assume that a valid number will be provided.

  // ItemCreator should be an IIFE with private functions that validate item information
  // and returns a constructor function that can be called with new in order to establish
  // object state
  const ItemCreator = (function() {
    function validItemName(itemName) {
      return itemName.split(' ').join('').length >= 5
    }

    function validCategory(category) {
      if ((category.split(' ').length > 1) || (category.length < 5)) {
        return false;
      } else {
        return true;
      }
    }

    function validQuantity(quantity) {
      return typeof quantity === 'number';
    }

    function createSku(itemName, category) {
      let skuCode = itemName.split(' ').join('').slice(0, 3) + category.slice(0, 2);
      return skuCode.toUpperCase();
    };

    return function(itemName, category, quantity) {
      if (validItemName(itemName) && validCategory(category) && validQuantity(quantity)) {
        this.skuCode = createSku(itemName, category);
        this.itemName = itemName;
        this.category = category;
        this.quantity = quantity;
      } else {
        return {
          notValid: true,
        }
      }
    }
  })();

// console.log(ItemCreator)
// let test = new ItemCreator('basketball', 'sports', 3)
// console.log(test);

// methods performed by item manager
  // create: This method creates a new item. Returns false if creation is not successful.

  // update: This method accepts an SKU Code and an object as an argument and updates 
  // any of the information on an item. You may assume valid values will be provided.

  // delete: This method accepts an SKU Code and deletes the item from the list. You 
  // may assume a valid SKU code is provided.

  // items: This property returns all the items.

  // inStock: This method list all the items that have a quantity greater than 0.

  // itemsInCategory: This method list all the items for a given category

  const ItemManager = (function() {
    const itemsList = [];

    function findItem(skuCode) {
      return itemsList.filter(item => {
        return item.skuCode === skuCode;
      })[0]
    }
  
    return {
      create(itemName, category, quantity) {
        // create a new item, return false if creation not successful
        let item = new ItemCreator(itemName, category, quantity);
        return item.notValid === true ? false : itemsList.push(item);
      },

      update(skuCode, itemUpdates) {
        Object.assign(findItem(skuCode), itemUpdates);
      },

      delete(skuCode) {
        itemsList.slice(itemsList.splice(findItem(skuCode), 1));
      },

      items() {
        return Array.from(itemsList.map(itemObj => {
          return {...itemObj} // use spread syntax to copy obj
        }));
      },

      inStock() {
        return itemsList.reduce((availInventory, item) => {
          if (item.quantity > 0) {
            availInventory.push(Object.assign({}, item));
          }

          return availInventory;
        }, []);
      },

      itemsInCategory(category) {
        return itemsList.reduce((inCategory, item) => {
          if (item.category === category) {
            inCategory.push(Object.assign({}, item));
          }

          return inCategory;
        }, []);
      },
    }
  })();
// ItemManager.create("basketball", "sports", 2);
// console.log(ItemManager.inStock());
// console.log(ItemManager.itemsInCategory('sports'));
// console.log(ItemManager.items());
// let test = ItemManager.items();
// test[0].skuCode = 'bad';
// console.log(test);
// console.log(ItemManager.items());
// console.log(ItemManager.items());
// ItemManager.update('BASSP', {quantity: 4});
// console.log(ItemManager.items());
// ItemManager.delete('BASSP');
// console.log(ItemManager.items());

// methods for report manager
  // init: This method accepts the ItemManager object as an argument and assigns it to the items property.

  // createReporter: This method accepts an SKU code as an argument and returns an object.
  //     - The returned object has one method, itemInfo. It logs to the console all the properties of 
  //       an object as "key:value" pairs (one pair per line). There are no other properties or methods 
  //       on the returned object (except for properties/methods inherited from Object.prototype).

  // reportInStock: Logs to the console the item names of all the items that are in stock as a comma separated values.

const ReportManager = (function() {
  const Reports = {};

  function findItem(skuCode) {
    return Reports.items.items().filter(item => {
      return item.skuCode === skuCode;
    })[0]
  }

  return {
    init(itemManager) {
      Reports.items = itemManager;
    },

    createReporter(skuCode) {
      let item = findItem(skuCode);
      return {
        itemInfo() {
          let entries = Object.entries(item);
          entries.forEach(keyValue => {
            console.log(keyValue[0], ': ', keyValue[1]);
          })
        }
      }
    },

    reportInStock() {
      let availableInventory = Reports.items.inStock().reduce((list, item) => {
        list.push(item.itemName);
        return list;
      }, []);

      console.log(availableInventory.join(', '));
    },
  }
})();


// TESTS
ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
console.log(ItemManager.items());

// //self test
// ReportManager.init(ItemManager);
// // ReportManager.createReporter('BASSP').itemInfo();
// ReportManager.reportInStock();
// //end self test


// TESTS
ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();
ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
console.log(ItemManager.inStock());
// football,kitchen pot
ReportManager.reportInStock();
// returns list with the item objects for basket ball, soccer ball, and football
console.log(ItemManager.itemsInCategory('sports'));
ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
ItemManager.items;
let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3
ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10