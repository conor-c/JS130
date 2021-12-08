// breakdown of two module systems
// Node modules, known as "CommonJS" modules
// JS modules, know as "ES modules" and "ECMAScript" modules

// Why care about modules? Why do we ned modules?
// As programs increase in complexity and scope, the actual size of the program does as well
// having all the code in one file would be possible, but the downsides are astronomical and there
// are no upsides

// modules help by allowing the programmer to break down functionality into their own files, and import
// other modules that a module needs, while exporting any data they want available
// This allows the ability to have easily private data/scopes, it frees up the global namespace
// and it allows multiple programmers to work on different parts of the code at the same time
// with less opportunities to run into conflicting changes. On top of all that
// if you want to reuse some code or functionality in the codebase, modules
// allow you to easily do that without having to disentangle it from the codebase

// it's easy to think of modules like objects

// we have commonly used CommonJS (node) modules before, mainly when we "require" (export) the 'readline-sync' module.
// the reason we can just type 'readline-sync' instead of an absolute file path is because that module
// was installed by npm, and node is aware of where npm installs modules already

const { countIt, logIt } = require('./logit');
console.log(countIt([1, 2, 3]));
logIt('we counted!');
// used object destructuring to destructure the imported logit module

// in node, all code is part of a CommonJS module, even the main program

// variables you can use in all node code
// module: an object that represents the current module
// exports: the name/s exported by the module (which is the same as module.exports)
// require(modulename): this is the function that loads the module/imports it
// __dirname: the absolute pathname of the directory
// __filename: the absolute pathname of the file that contains the module

console.log(__filename);