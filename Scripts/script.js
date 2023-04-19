
// Get the modal element
const modal = document.getElementById('myModal');

// Get the button that opens the modal
const modalButton = document.getElementById('modalButton');

// Get the span element that closes the modal
const closeSpan = modal.querySelector('.close');

// Function to open the modal
function openModal() {
  modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
  modal.style.display = 'none';
}

// Event listener for button click to open the modal
modalButton.addEventListener('click', openModal);

// Event listener for span click to close the modal
closeSpan.addEventListener('click', closeModal);

// Event listener for outside click to close the modal
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});