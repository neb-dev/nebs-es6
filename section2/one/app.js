// import and export example using Plunker
'use strict';
import { keyValue, test } from 'external.js';

console.log(keyValue); // 1000 this value is copied by reference
test();
console.log(keyValue); // 2000
