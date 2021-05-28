// rest operator used as function parameters to pass arbitrary number of method args
let addUp = (...nums) => {
	// rest operator creates an array of values
	console.log(nums);
	let sum = 0;
  for (let num of nums) {
  	sum += num;
  }
  return sum;
};

console.log(addUp(21,14,18,7));