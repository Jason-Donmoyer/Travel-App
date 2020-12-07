

async function getCurrentDate() {
  const date = new Date();
  const currentDate = date.now();
  console.log(currentDate);
}



export { getCurrentDate };