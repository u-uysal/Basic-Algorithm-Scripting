function mutation(arr) {
    let secondArray = arr[1].toLowerCase().split("");
    let firstArray = arr[0].toLowerCase().split("");
    let containsArray = secondArray.filter(elem => (firstArray.includes(elem) == true));


    if (containsArray.length < secondArray.length) {
        return false
    }

    return true;
}

mutation(["hello", "hey"]);