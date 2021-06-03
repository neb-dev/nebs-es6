let keyValue = 1000;
function test() {
  keyValue = 2000;
  console.log("tested!");
}
let ab = "Some Text";
export {keyValue, test};
export default ab; // sets ab as the default export for this file - only one default export is allowed per file