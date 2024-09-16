//function to check for if char is a letter
function toLetters(char){
    return char.toLowerCase() != char.toUpperCase();
}
//function to shift
function shiftChar(char, shift){
    const charCode = char.charCodeAt(0);
    let base;

    //check if char is uppercase or lowercase, then set basecode
    //if not letter return char

    if(char >= "A" && char <= "Z"){
        base = "A".charCodeAt(0);
    }else if(char >= "a" && char <= "z"){
        base = "a".charCodeAt(0);
    }else {
        return char;
    }
    return String.fromCharCode(((charCode - base + shift) % 26) + base);   // Shift the character and wrap around using modulo
}

//function to cpyher, which uses first checking for lettrs and spacing , then shifting
const cipher = (string, n) => {

    const splitString = string.split('').map(char => {
        if(toLetters(char)){
            return shiftChar(char, n);
        }else{
            return char
        }
    })
    //split the string into array of charcaters and use map to loop through them
    //const shiftedString = string.split("").map(char => {
        // if isLeter(char)})
        //return shiftChar(char,n)
        //else return char
    return splitString.join("");
    //join shifted array
};

module.exports = cipher;
