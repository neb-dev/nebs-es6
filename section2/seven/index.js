class Person {
	constructor(name) {
		this._name = name; // _ makes the variable private and not accessible outside of Person class
	}
  
  get name() {
  	return this._name.toUpperCase(); 
  }
  
  set name(value) {
  	if(value.length > 2) {
			this._name = value;
  	}
    console.log('name was rejected');
  }
}

let person = new Person('Josh');
console.log(person); // gets object of Person class
person.name = 'Jo'; // name was rejected
console.log(person.name); // JOSH
person.name = 'Jess'; // sets property in object of Person class
console.log(person.name); // JESS

// if Person did not have a getter to access the name property you would do this instead
console.log(person._name); // Jess