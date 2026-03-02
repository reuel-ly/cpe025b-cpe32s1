function div(num1, num2){                                                                                                
    if (num2 === 0) {
        throw new RangeError("Cannot divide by zero");
    }
    return num1 / num2;
}

//console.log(div(10, 2)); // Output: 5
console.log(div(10, 0)); // This will throw an error