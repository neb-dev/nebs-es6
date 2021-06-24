class Person {
	constructor(name) {
		this.name = name;
	}
  greet() {
  	console.log("Hi, I'm " + this.name + " and I'm " + this.age + " years old.");
  }
}

// let person = new Person("Josh");
// person.greet();

class Josh extends Person {
	constructor(age) {
  	super("Josh"); // calls parent constructor and passes Josh to name property
  	this.age = age;
  }
  
  greet() {
  	console.log("Hello.");
  }
  
  greetTwice() {
  	this.greet(); // refers to the Josh class object
    super.greet(); // refers to the Person class object
  }
}

let josh = new Josh(30);
// josh.greet(); // "Hi, I'm Josh and I'm 30 years old."
josh.greetTwice(); // prints greet method twice

console.log(josh.__proto__ === Person); // false
console.log(josh.__proto__ === Person.prototype); // false
console.log(josh.__proto__ === Josh.prototype); // true