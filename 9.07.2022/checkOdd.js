function isOdd(n){
    if(n%2!=0) return true;
    return false;
}

function getValues(n) {
    for(var i=0;i<=n;i++){
        if(isOdd(i)) console.log(i);
    }
}

getValues(10);