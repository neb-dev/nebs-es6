let arr = [1, 2, 3];

console.log(typeof arr[Symbol.iterator]); // function

arr[Symbol.iterator] = function() {
	let nextValue = 10;
	return {
  	next: function() {
    	nextValue++;
    	return {
      	done: nextValue > 15 ? true : false,
      	value: nextValue
      }
    }
  }
}

for (let el of arr) {
	console.log(el);
}

