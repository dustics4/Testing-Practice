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