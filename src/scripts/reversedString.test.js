import reversed from "./reversedString.js";

test("Reversed String", () => {
    expect((reversed("reversed")).toMatch(/desrever/));
});

test("Reversed String", () => {
    expect((reversed("john")).toMatch(/nhoj/));
});

test("Not to be a number", () => {
    expect((reversed("reversed")).to.notBe(2));
})