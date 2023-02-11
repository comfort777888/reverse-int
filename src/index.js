module.exports = function reverse (n) {
    if (n<0) {
        n=(-n)
    }

    let i=0;
    let res="";
    let nString=n.toString();
    for (let i=nString.length-1; i>=0; i--) {
        res=`${res}${nString[i]}`  
    }
    

    while (i<res.length) {     
        if (res[i]!=="0") {
            break
        } else {
            res=res.slice(i+1)
           
        }
        i++
    
    }
return res
  
}

//console.log(reverse(584232000))