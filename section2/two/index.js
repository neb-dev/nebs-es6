// import and export example using stack blitz
// modules are always in Strict Mode, no need to define "use strict"
// regular imports can be renamed using the keyword "as"
// default imports can be declared alongside regular imports
import text, { keyValue as key, test } from './external.js';
// import ab from './external.js';
// default exports can also be named something different when imported
// import text from './external.js';

console.log(key); // 1000 this value is copied by reference
test();
console.log(key); // 2000
// console.log(ab);
console.log(text); // Some Text

// you can also import everything (no default import)
import * as controls from './external.js';

console.log(controls.keyValue);
controls.test();
console.log(controls.keyValue);


