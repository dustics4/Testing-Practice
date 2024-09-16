const reversed = (string) => {
    let subStr = "";

    for(let i = string.length - 1; i >= 0; i--){
        subStr += string[i];
    }
    return subStr;
}

console.log(reversed("string"));
module.exports = reversed;