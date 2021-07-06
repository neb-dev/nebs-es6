let arr = [1, 2, 3];

console.log(typeof arr[Symbol.iterator]); // function

let it = arr[Symbol.iterator]();

console.log(it); // [object Array Iterator]

console.log(it.next()); // { done: false, value: 1 }
console.log(it.next()); // { done: false, value: 2 }
console.log(it.next()); // { done: false, value: 3 }
console.log(it.next()); // { done: true, value: undefined }

