function truncateString(str, num) {
    let newstr;
    if (str.length > num) {
        newstr = str.slice(0, num);
        newstr += "..."
        return newstr;
    } else {
        return str
    }

}

let result = truncateString("Absolutely Longer", 2);
console.log(result)