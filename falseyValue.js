function bouncer(arr) {
    return arr.filter(item => Boolean(item) == true);
}

let a = bouncer([7, "ate", "", false, 9]);

console.log(a)