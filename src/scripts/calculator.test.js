const calculator = require("./calculator.js");;

test("Add (4,2) is 6", () => {
    expect(calculator.add(4,2)).toBe(6);
})

test("Add (-4, 2) to be -2", () =>{
    expect(calculator.add(-4,2)).toBe(-2);
})

test("Add is a integer", () => {
    expect(calculator.add(-4,2)).not.toBe(/string/);
})

test("Subract (4, 2) to be 2", () => {
    expect(calculator.subtract(4,2)).toBe(2);
})

test("Subtract (-4, 2 to be -6", () =>{ 
    expect(calculator.subtract(-4,2)).toBe(-6);
})

test("Subtract is a integer", () => {
    expect(calculator.subtract(-4,2)).not.toBe(/string/);
})

test("Divide (6, 2) to be 3", () => {
    expect(calculator.divide(6,2)).toBe(3);
})

test("Divide (8, 4) to be 2", () =>{ 
    expect(calculator.divide(8,4)).toBe(2);
})

test("Divide is a integer", () => {
    expect(calculator.divide(8,2)).not.toBe(/string/);
})

test("Multiply (6, 2) to be 12", () => {
    expect(calculator.multiply(6,2)).toBe(12);
})

test("Multiply (8, 2) to be 16", () =>{ 
    expect(calculator.multiply(8,2)).toBe(16);
})

test("Multiply is a integer", () => {
    expect(calculator.multiply(8,2)).not.toBe(/string/);
})