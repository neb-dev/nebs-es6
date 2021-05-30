// es6 allows default parameters
function isEqual(number = 10, compare = 0) {
	return number == compare;
}

console.log(isEqual(10)); // false
console.log(isEqual(10, 10)); // true
console.log(isEqual()); // true


// regular params should not come after default
function isEqual2(number = 10, compare) {
	console.log(number);
	console.log(compare)
	return number == compare;
}

console.log(isEqual2(11)); // false

function isEqual(number = 10, compare = 0) {
	return number == compare;
}


function isEqual3(number = 10, compare = 20 / 2) {
	return number == compare;
}

console.log(isEqual3()); // true


function isEqual4(number = 10, compare = number) {
	return number == compare;
}

console.log(isEqual4()); // true
console.log(isEqual4(10, 12)); // false


let a = 100;
function isEqual5(number = 10, compare = a) {
	return number == compare;
}
console.log(isEqual5()); // false


function isEqual6(number = compare, compare = 10) {
	return number == compare;
}
console.log(isEqual6()); // error (compare is not defined, cannot use before definition)
