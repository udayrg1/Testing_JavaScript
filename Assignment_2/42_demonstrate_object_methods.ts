let calculator = {
    num1: 20,
    num2: 10,

    // Addition method
    add: function () { return this.num1 + this.num2; },

    // Subtraction method
    subtract: function () { return this.num1 - this.num2; },

    // Multiplication method
    multiply: function () { return this.num1 * this.num2; }
};

console.log("Addition:", calculator.add());
console.log("Subtraction:", calculator.subtract());
console.log("Multiplication:", calculator.multiply());