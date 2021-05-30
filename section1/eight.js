let numbers = [1,2,3,4,5];

console.log(Math.max(numbers)); // NaN

// instead of using rest as a function parameter we are using spread as a function argument
console.log(Math.max(...numbers)); // 5

// rest does the opposite of spread
// rest takes values and creates an array
// spread splits array into individual values
console.log(...numbers); // prints out individual values