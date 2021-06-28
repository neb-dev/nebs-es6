// Symbol.for() method searches for existing symbols in a runtime-wide symbol registry with the given key and returns it if found. Otherwise a new symbol gets created in the global symbol registry with this key.
let symbol1 = Symbol.for('age');
let symbol2 = Symbol.for('age');

console.log(symbol1 == symbol2); // true because unqiue ids match

let person = {
	name: 'Josh',
  age: 30
}

function makeAge(person) {
	let ageSymbol = Symbol.for('age');
  person[ageSymbol] = 27;
}

makeAge(person);

console.log(person[symbol1]); // 27 symbol1, symbol2, ageSymbol all point to the same 'age' id
console.log(person[symbol2]); // 27 symbol1, symbol2, ageSymbol all point to the same 'age' id

console.log(person["age"]); // 30 ageSymbol does not effect the age object property as a symbol is simply a unique identifer stored in a hidden property