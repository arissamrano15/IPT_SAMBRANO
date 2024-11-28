// Handle Addition
document.getElementById('addForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form refresh

    // Get input values
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    // Check if inputs are numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        const sum = num1 + num2;
        document.getElementById('result').textContent = `Result: ${sum}`;
    } else {
        alert('Please enter valid numbers.');
    }
});

// Handle Toggle Mode
document.getElementById('toggleModeBtn').addEventListener('click', function () {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
});
