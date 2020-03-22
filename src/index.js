
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === null || matrix === undefined || matrix.length === 0) {
        return [];
    }

    let sortedArr = [];

    for (let i = 0; i < matrix.length; i++) {
        let arr = matrix[i];
        if (i % 2 !== 0) {
            arr = arr.reverse();
        }
        sortedArr = sortedArr.concat(arr);
    }
    return sortedArr;
}
