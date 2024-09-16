const cipher = require("./caesarCipher.js")

test("Function Shifted :" , () => {
    expect(cipher("xyz", 3)).toMatch(/abc/);
});

test("Function Shifted : ", () => {
    expect(cipher("Hello, World!", 3)).toMatch(/Khoor, Zruog!/);
})

test("This is a num!" , () => {
    expect(cipher("Hello, World!")).not.toBe(1);
})

test(`1 becomes "not a string"` , () =>{
    expect(cipher(1)).toBe('not a string');
})