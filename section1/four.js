let button = document.querySelector("button");

function fn() {
  console.log(this);
}
// this refers to the window object - global context
fn();
// this refers to the HTML button element - button context - the context in which it was defined is lost and will change
button.addEventListener("click", fn);


let fn2 = () => console.log(this);
// this refers to the window object - global context
fn2();
// this refers to the window object - global context - the context is not lost or changed
button.addEventListener("click", fn2);

<button>Button</button>