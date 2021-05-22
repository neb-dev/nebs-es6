if(true) {
    var name = "Josh";
  }
  
  console.log(name);
  
  if(true) {
    let name = "Jess";
  }
  
  // does not print Jess
  console.log(name);
  
  // const BIRTHDAY = 03281991;
  // will throw type error
  // BIRTHDAY = 32891
  
  const SCORES = [77, 21, 18];
  // doesn't work because we cannot change the pointer (reference)
  // SCORES = [14, 91, 46]
  
  // this works because we are changing the value to which the pointer references
  SCORES.push(87);
  console.log(SCORES);
  
  const PERSON = {
    class: "peasant"
  }
  console.log(PERSON.class);
  // also works for objects
  PERSON.class = "citizen";
  console.log(PERSON.class);