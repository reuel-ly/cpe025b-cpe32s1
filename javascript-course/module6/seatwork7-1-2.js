let numbers = [10, 40, 0, 20, 50];

for (let i = 0; i < numbers.length; i++) {
    try{
        if (numbers[i] === 0) {
            throw new RangeError("Cannot divide by zero");
        }
        console.log(numbers[i] / 1000);
    }
    catch(error){
        console.log(error);
    }
}