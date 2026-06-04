let count = 0; // Initialize count

// Select DOM elements
const countDisplay = document.getElementById('countDisplay');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');

// Function to update the display
function updateDisplay() {
    countDisplay.textContent = count;
}

// Event listeners
incrementBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

decrementBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        updateDisplay();
    }
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});

// Initial display update
updateDisplay();