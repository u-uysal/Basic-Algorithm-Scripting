function findLongestWordLength(str) {
    let arrayOfWords = str.split(" ");

    let lengthOfItems = arrayOfWords.map(item => item.length);

    let maxLenghtOfArray = Math.max(...lengthOfItems);



    return maxLenghtOfArray;
}

let result = findLongestWordLength("The quick brown fox jumped over the lazy dog");

console.log(result);