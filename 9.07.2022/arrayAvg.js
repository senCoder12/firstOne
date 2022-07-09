function getSum(n,arr) {
    var sum =0;
    for(var i=0;i<n;i++) sum+=arr[i];
    return sum;
}

function getAvg(n,arr){
    if(n==0) return 0;
    var sum = getSum(n,arr);
    return sum/n ;
}

arr = [3,4,5,2,4,1,2,3,4,9];
console.log(getAvg(10,arr));

arr2 = [];
console.log(getAvg(0,arr2));