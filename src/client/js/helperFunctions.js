
// Function to capitalize first letter of stringify
function firstCharUpper(str) {
  let strArr = str.split(' ');
  let capStrArr = [];
  strArr.forEach((str) => {
    capStrArr.push(str.charAt(0).toUpperCase() + str.slice(1));
  });
  return capStrArr.join(' ');
}


export { firstCharUpper };