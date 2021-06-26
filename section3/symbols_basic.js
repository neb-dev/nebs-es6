let symb = Symbol('debug');
console.log(symb); // object
console.log(symb.toString()); // Symbol(debug)
console.log(typeof symb); // symbol (data type)

let anthrSymb = Symbol('debug');
console.log(symb == anthrSymb); // false

let obj = {
	name: 'Josh',
  [symb]: 22
}
console.log(obj); // does not prin symb as this is the expected behavior
console.log(obj[symb]); // 22 - this is how to access a symbol key value
