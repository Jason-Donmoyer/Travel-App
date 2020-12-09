

async function getCurrentDate() {
  
  //import { numerizeDate } from './helperFunctions';
  
  const currentDate = new Date();
  const isoDate = currentDate.toISOString();
  const shortDate = isoDate.replace(/T.*/, '');
  

  const arrDate = document.getElementById('arrival-date').value;
  const depDate = document.getElementById('departure-date').value;

  console.log([shortDate, arrDate, depDate]);

  const numArrDate = Client.numerizeDate(arrDate);
  console.log(numArrDate);
  

}





export { getCurrentDate };