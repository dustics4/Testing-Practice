const capitalize = require("./capitalize.js")

it('Capitalized String' , () => {
    expect(capitalize("string")).toMatch(/String/);
});

it('Exact Capitalized String' , () => {
    expect(capitalize("string")).toBe("String");
});

it('Capitalized String' , () => {
    expect(capitalize("john")).toMatch(/John/);
});

it('Not Num' , () => {
    expect(capitalize("string")).not.toBe(1);
});
