function updateUI(image) {
  const form = document.querySelector('form');
  const modal = document.querySelector('#modal');

  modal.style.backgroundImage = `url(${image})`;

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