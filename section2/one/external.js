export let keyValue = 1000;
export function test() {
  console.log('tested!');
}


let keyValue = 1000;
function test() {
  keyValue = 2000;
  console.log('tested!');
}

export {keyValue, test};
