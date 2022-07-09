function charToLower(a){
    return a.toLowerCase();
}

function StringToLower(str) {
    var out="";
    for(var i=0;i<str.length;i++){
        out+=charToLower(str[i]);
    }
    return out;
}

function arrayToLower(arr) {
    for(var i=0;i<arr.length;i++){
        arr[i]=StringToLower(arr[i]);
    }
    return arr;
}

arr = ["MA", "SA", "I", "SCH", "OOL"];
console.log(arrayToLower(arr));