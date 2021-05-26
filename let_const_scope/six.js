let name = "Jessica";
let age = 31;

// obj literal
let obj = {
    name: "Josh",
    age: 30,
    greet() {
    console.log("Hello " + this.name, ", your age is: " + this.age);
    }
}

console.log(obj);


let obj2 = {
    name,
    age
}

console.log(obj2);


let obj3 = {
	name: "Bailey",
  age
};

console.log(obj3);


age = 2;

let obj4 = {
    name: "Bailey",
    age,
    greet() {
    console.log("Hello " + this.name, ", your age is: " + this.age);
    }
};

obj4.greet();


let obj5 = {
    "name": "Bailey",
    age,
    "greet"() {
    console.log("Hello " + this.name, ", your age is: " + this.age);
    }
};

obj4["greet"]();
