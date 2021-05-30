warrior = "jorah";
console.log(warrior);
// var hoisting
var warrior;

// king = "jon";
// console.log(king);
// let does not hoist (nor does it work with const)
// let king;

function ride() {
  mount = true;
}
// you must declare before use
let mount; // declared
ride(); // used
console.log(mount)