// for - of loop (arrays)
let points = [1.2,2.4,3.9,4.0]

for (let result of points) {
	console.log(result); // iterates through array and prints each value
}


// template literal
let movie = "matrix";
let quote = `

there is 
no spoon

`;
// prints with new lines included
console.log(quote);

let series = "Reloaded";
// template interpolation
let title = `The Matrix ${series + '!'}`; // you can escape the template literal by adding a \ infront of the $
console.log(title);