let obj = {
	name: "Josh",
  age: 30,
  greet: function() {
  console.log("Hello World");
  }
};

// let {name, age} = obj
// console.log(name, age);

// order doesn't matter as the variables are referencing the object's property names
// let {name, greet} = obj; 
// greet();

// error, cannot skip property names like destructuring arrays
// let {name, , greet} = obj;

// variables must match property names, this will throw an error
// let {name1, , greet1} = obj;

// assign an alias to use with different name outside
let {name: firstName, age, greet: hello} = obj;
console.log(firstName);
console.log(age);
hello();

// this will not work as greet was assigned to the alias hello
// greet();
