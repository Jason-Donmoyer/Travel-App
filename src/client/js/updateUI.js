async function updateUI(image, temp, forcast) {
  const form = document.querySelector('form');
  const modal = document.querySelector('#modal');
  const modalHeader = document.getElementById('destination-name');
  const arrivalDate = document.getElementById('arrival-span');
  const departureDate = document.getElementById('departure-span');
  const temperature = document.querySelector('#temp-data');
  const textForcast = document.querySelector('#text-forcast');

  const locationName = document.getElementById('city').value;
  const cityName = Client.firstCharUpper(locationName);

  modal.style.backgroundImage = `url(${image})`;
  modalHeader.innerHTML = cityName;
  arrivalDate.innerHTML = document.getElementById('arrival-date').value;
  departureDate.innerHTML = document.getElementById('departure-date').value;
  temperature.innerHTML = temp;
  textForcast.innerHTML = forcast;
  console.log([temperature, textForcast]);
  

  form.style.display = 'none';
  modal.style.display = 'flex';
  
  // hides modal and reveals form 
  const refreshButton = document.getElementById('refresh-btn');
  refreshButton.addEventListener('click', () => {
    form.style.display = 'flex';
    modal.style.display = 'none';
  });
}

export { updateUI };