function replaceFunction(str,oldStr,newStr) {
    var lst = str.split(" ");
    for(var i=str.length-1;i>=0;i--){
        if(lst[i]==oldStr){
            lst[i]=newStr;
        }
    }
    console.log(lst.join(" "));
}

var string = "dog dog dog you dog";
replaceFunction(string,'dog','monkey');