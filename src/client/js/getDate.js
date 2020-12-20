

function getCurrentDate() {
  
  //import { numerizeDate } from './helperFunctions';
  let dateData = [];
  let lessThanOneWeek;
  
  // get todays date and shorten format using regex
  const currentDate = new Date();
  const isoDate = currentDate.toISOString();
  const shortDate = isoDate.replace(/T.*/, '');
  
  // get arrival date from user input
  const arrDate = document.getElementById('arrival-date').value;
  // get return date from user input
  const depDate = document.getElementById('departure-date').value;

  console.log([shortDate, arrDate, depDate]);

  // set new Date to today
  const todaysDate = new Date(shortDate);
  console.log(todaysDate);
  // set arrival date
  const arrivalDate = new Date(arrDate);
  console.log(arrivalDate);

  // set return date
  const returnDate = new Date(depDate);
  console.log(returnDate);

  // time between dates in milliseconds
  const Diff_Time = arrivalDate.getTime() - todaysDate.getTime();
  console.log(Diff_Time);
  // time between dates in days
  const Diff_Days = Diff_Time / (1000 * 3600 * 24); 
  console.log(Diff_Days);

  const Trip_Time = returnDate.getTime() - arrivalDate.getTime();
  const Trip_Days = Trip_Time / (1000 * 3600 * 24);
  console.log(Trip_Days);


  if (Diff_Time < 0) {
    alert('Please Enter A Date Today Or After');
  } else if (Diff_Days <= 7) {

    lessThanOneWeek = true;
  } else {

    lessThanOneWeek = false;
  }

  console.log(lessThanOneWeek);

  dateData.push(lessThanOneWeek);
  dateData.push(Diff_Days);
  dateData.push(Trip_Days);

  return dateData;

}





export { getCurrentDate };