
// Function to convert Date Oject from string to int
function numerizeDate(date) {
  let newDateArr = [];
  let arrDate = date.split('-');
  arrDate.forEach((x) => {
    
    newDateArr.push(parseInt(x));
  });
  return newDateArr;
}

// Function to capitalize first letter of stringify
function firstCharUpper(str) {
  let strArr = str.split(' ');
  let capStrArr = [];
  strArr.forEach((str) => {
    capStrArr.push(str.charAt(0).toUpperCase() + str.slice(1));
  });
  return capStrArr.join(' ');
}


export { numerizeDate,
         firstCharUpper
 };