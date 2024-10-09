function formatNumbers() {
    const input = document.getElementById('phoneInput').value;
    const numbers = input.split(',').map(num => num.trim()).filter(num => num);
    const tableBody = document.getElementById('phoneTable').getElementsByTagName('tbody')[0];
    
    // Clear previous table rows
    tableBody.innerHTML = '';

    numbers.forEach(number => {
        const row = tableBody.insertRow();
        const cell = row.insertCell(0);
        cell.textContent = number;
    });
}
