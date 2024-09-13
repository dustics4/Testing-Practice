const capitalize = require("./capitalize.js")

it('Capitalized String' , () => {
    expect(capitalize("string")).toMatch(/String/);
});

it('Exact Capitalized String' , () => {
    expect(capitalize("string")).toBe("String");
});

it('Not Num' , () => {
    expect(capitalize("string")).not.toBe(1);
});
