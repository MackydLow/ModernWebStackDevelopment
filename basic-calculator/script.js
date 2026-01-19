function getNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    return { num1, num2 };
}

function calculate(operation) {
    const { num1, num2 } = getNumbers();
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        return "Please enter valid numbers.";
    }

    if (isNaN(num1) || isNaN(num2)) {
    return "Error: Please enter valid numbers in both fields.";
    }
    if (operation === 'divide' && num2 === 0) {
    return "Error: Cannot divide by zero.";
    }


    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero.";
            break;
        default:
            result = "Invalid operation.";
    }

    return result;
}

document.getElementById('add').addEventListener('click', () => {
    document.getElementById('result').textContent = `Result: ${calculate('add')}`;
});

document.getElementById('subtract').addEventListener('click', () => {
    document.getElementById('result').textContent = `Result: ${calculate('subtract')}`;
});

document.getElementById('multiply').addEventListener('click', () => {
    document.getElementById('result').textContent = `Result: ${calculate('multiply')}`;
});

document.getElementById('divide').addEventListener('click', () => {
    document.getElementById('result').textContent = `Result: ${calculate('divide')}`;
});
