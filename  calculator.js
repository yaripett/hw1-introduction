var x;
var y;
var operator;
var result;

var results = [];
var continueCalc = true;
alert("JavaScript is connected");
document.write("<table>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

while (continueCalc) {

    x = prompt("Enter the first number:");
    if (x === null) {
        break;
    }

    y = prompt("Enter the second number:");
    if (y === null) {
        break;
    }

    operator = prompt("Enter an operator (+, -, *, /, %):");
    if (operator === null) {
        break;
    }

    if (isNaN(x) || isNaN(y)) {
        result = "Invalid number";
    } else {

        x = parseFloat(x);
        y = parseFloat(y);

        switch (operator) {
            case "+":
                result = x + y;
                break;

            case "-":
                result = x - y;
                break;

            case "*":
                result = x * y;
                break;

            case "/":
                if (y == 0) {
                    result = "Cannot divide by zero";
                } else {
                    result = x / y;
                }
                break;

            case "%":
                if (y == 0) {
                    result = "Cannot divide by zero";
                } else {
                    result = x % y;
                }
                break;

            default:
                result = "Invalid operator";
        }
    }

    document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>"
        + result + "</td></tr>");

    if (typeof result == "number") {
        results.push(result);
    }

    continueCalc = confirm("Click OK to continue or Cancel to stop.");
}

document.write("</table>");


// Summary table
if (results.length > 0) {

    var total = 0;

    for (var i = 0; i < results.length; i++) {
        total = total + results[i];
    }

    var min = Math.min(...results);
    var max = Math.max(...results);
    var avg = total / results.length;

    document.write("<table>");
    document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");

    document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg +
        "</td><td>" + total + "</td></tr>");

    document.write("</table>");
}
