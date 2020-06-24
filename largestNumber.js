function largestOfFour(arr) {
    let arrOfMax = [];
    for (i = 0; i < arr.length; i++) {
        let maxNum = 0;
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] >= maxNum) {
                maxNum = arr[i][j];
            }
        }
        arrOfMax.push(maxNum);

    }
    return arrOfMax
}

let result = largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);

console.log(result);