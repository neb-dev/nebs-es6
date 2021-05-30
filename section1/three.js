function foo() {
    console.log("foo");
  }
  
  let bar = () => {
    console.log("bar");
  }
  
  // no parameter, no code block
  let foobar = () => "foobar";
  console.log(foobar());
  
  // one parameter, no code block
  let wtf = x => x + 7
  console.log(wtf(3))
  
  // call back
  setTimeout(() => console.log("Hello World"), 1000)