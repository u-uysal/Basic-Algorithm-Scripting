function repeatStringNumTimes(str, num) {
    let newstr = "";
    if (num > 0) {
        newstr = str.repeat(num)
    }
    return newstr;
}

let result = repeatStringNumTimes("abc", 3);
console.log(result)