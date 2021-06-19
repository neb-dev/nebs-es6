class Person {
	constructor(age) {
		this.name = 'Josh';
    this.age = age;
	}
  
	greet() {
  	console.log('Hello, my name is ' + this.name +'. I am ' + this.age + ' years old.');
  }
}

let person = new Person(30);

console.log(Person); // logs an object
person.greet(); // Hello!
console.log(person.__proto__); // {...}
console.log(person.__proto__ == Object.prototype); // false
console.log(person.__proto__ == Object); // false
console.log(person.__proto__ == Person.prototype); // true