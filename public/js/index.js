// Generate a random number between 1 and 10
const targetNumber = Math.floor(Math.random() * 10) + 1;

// Get references to the form, input, and result element
const form = document.querySelector('form');
const input = document.querySelector('#guess');
const result = document.querySelector('#result');

// Add an event listener for the submit event
form.addEventListener('submit', event => {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the user's guess
  const guess = Number(input.value);

  // Clear the input field
  input.value = '';

  // Check if the guess is correct
  if (guess === targetNumber) {
    result.textContent = 'Correct!';
  } else if (guess > targetNumber) {
    result.textContent = 'Too high!';
  } else {
    result.textContent = 'Too low!';
  }
});