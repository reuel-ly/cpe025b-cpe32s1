// // Section 1
console.log(2 * 3 + 1);      // expected 7
console.log(2 ** 4);       // expected 16
console.log(5 * 1);       // expected 5
console.log((8 + 2) * 5 - 11); // expected 39

// Section 2
console.log(4 * 5 === 20);
console.log(6 * 5 !== "30");
console.log(-17 < 0);
console.log(25 > 1);
console.log(2 + 2 * 2 > 4);

// Section 3
console.log(true || false);
console.log(!false || false);
console.log(false || false || true);
console.log(true || false || false && true);

let width = window.prompt("What is the width?", 1000);
let height = window.prompt("What is the height?", 1000);
let length = window.prompt("What is the length?", 1000);
alert("The volume of the box is " + (width * height * length));