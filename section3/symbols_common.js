//class Person {

//}

// built-in Symbol
//Person.prototype[Symbol.toStringTag] = 'Person';

//let person = new Person();

// [Object Person] {}
//console.log(Person);



let numbers = [1, 2, 3];

numbers[Symbol.toPrimitive] = function() {
	return 999;
}

// 1000
console.log(numbers + 1);