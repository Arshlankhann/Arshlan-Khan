class Calculator {
    constructor(a, b, operation) {
        this.a = a;
        this.b = b;
        this.operation = operation;
    }
    calculate() {
        if (this.operation === "add") {
            return this.a + this.b;
        } else if (this.operation === "subtract") {
            return this.a - this.b;
        } else if (this.operation === "multiply") {
            return this.a * this.b;
        } else if (this.operation === "divide") {
            if (this.b === 0) {
                return "Error: Division by zero"
            }
            return this.a / this.b;
        } else {
            return "Unknown operation";
        }
    }
}



let cal1 = new Calculator(37,3,"add");
console.log(cal1.calculate())