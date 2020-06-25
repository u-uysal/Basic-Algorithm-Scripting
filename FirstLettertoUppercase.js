function titleCase(str) {
    let newstr = str.split(" ");
    console.log(newstr[0])

    let newArray = [];

    for (let i = 0; i < newstr.length; i++) {
        console.log("eşşek", i)


        newArray.push(newstr[i].toString().charAt(0).toUpperCase() + newstr[i].toString().slice(1).toLowerCase());

    }
    return newArray.join(" ");
}

let result = titleCase("sHoRt AnD sToUt");
console.log(result)