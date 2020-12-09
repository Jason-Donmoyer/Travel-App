function numerizeDate(date) {
  let newDateArr = [];
  let arrDate = date.split('-');
  arrDate.forEach((x) => {
    
    newDateArr.push(parseInt(x));
  });
  return newDateArr;
}


export { numerizeDate };