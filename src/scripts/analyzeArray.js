const analyzeArray = (array) => {
    //first check array length is empty, return null

    if(array.length === 0) return null;

    const sum = array.reduce((acc, num) => acc + num , 0);

    const average = sum / array.length;

    const min = Math.min(...array);

    const max = Math.max(...array);

    return {
        average : average,
        min: min,
        max: max,
        length: array.length
    }
}

export default analyzeArray;
