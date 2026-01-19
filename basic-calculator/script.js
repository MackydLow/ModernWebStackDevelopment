// Get numbers from input fields
function getNumbers() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    return { num1, num2 };
}

// Perform calculation
function calculate(operation) {
    const { num1, num2 } = getNumbers();

    if (isNaN(num1) || isNaN(num2)) {
        return "Error: Please enter numbers in both fields.";
    }

    if (operation === "divide" && num2 === 0) {
        return "Error: Cannot divide by zero.";
    }

    switch (operation) {
        case "add":
            return num1 + num2;
        case "subtract":
            return num1 - num2;
        case "multiply":
            return num1 * num2;
        case "divide":
            return num1 / num2;
        default:
            return "Invalid operation.";
    }
}

// Button event listeners
document.getElementById("add").addEventListener("click", function () {
    document.getElementById("result").textContent =
        "Result: " + calculate("add");
});

document.getElementById("subtract").addEventListener("click", function () {
    document.getElementById("result").textContent =
        "Result: " + calculate("subtract");
});

document.getElementById("multiply").addEventListener("click", function () {
    document.getElementById("result").textContent =
        "Result: " + calculate("multiply");
});

document.getElementById("divide").addEventListener("click", function () {
    document.getElementById("result").textContent =
        "Result: " + calculate("divide");
});

