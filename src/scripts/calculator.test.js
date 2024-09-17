const calculator = require("./calculator.js");;

test("Add (4,2) is 6", () => {
    expect(calculator.add(4,2)).toBe(6);
})

test("Add (-4, 2) to be -2", () =>{
    expect(calculator.add(-4,2)).toBe(-2);
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