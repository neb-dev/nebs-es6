class Helper {
	static logTwice(message) {
  	console.log(message);
    console.log(message);
  }
}

Helper.logTwice('Logging'); // this works when a method is declared using the 'static' keyword

class Person {
	constructor(name) {
		this.name = name;
	}
  greet() {
  	console.log("Hi, I'm " + this.name + " and I'm " + this.age + " years old.");
  }
}

class Josh extends Person {
	constructor(age) {
  	super("Josh");
  	this.age = age;
  }
}

let josh = new Josh(30);
