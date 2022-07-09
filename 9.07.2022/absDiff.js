 function getDiff(a , b){
     return a-b;
 }

 function getAbs(a,b){
     var ans = getDiff(a,b);
     if(ans>0) return ans;
     return (-1)*ans;
 }

 console.log(getAbs(12,4));
 console.log(getAbs(4,18));