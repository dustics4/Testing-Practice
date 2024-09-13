const capitalize = (string) =>{
    let char = string.charAt(0);
    let toUpperCase = char.toUpperCase();
    let splitStr = string.substring(1);
    
    console.log(`${toUpperCase}` + `${splitStr}`)
    return `${toUpperCase}` + `${splitStr}`;
}

module.exports = capitalize;

capitalize("string");