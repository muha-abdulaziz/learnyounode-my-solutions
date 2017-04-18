function sumArr(arr) {
    if (arr.length === 1) return arr[0];
    
    return arr[0] + sumArr(arr.slice(1));
}
//console.log(sumArr([1, 1, 9, 9, 50]));

function sumArgs(argsArr) {
    var args = argsArr.slice(2);
    args = args.map(function (val) {return Number(val);});
    
    return sumArr(args);
}
var argsArr = process.argv;


console.log(sumArgs(argsArr));