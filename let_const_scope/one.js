if(true) {
    var name = "Josh"
}
// var does not use block-scoping and can be modified outside of its definition block
console.log(name)

let age = 30
if(true) {
    let age = 32
}
// does not print 32 because let uses block-scoping
console.log(age)