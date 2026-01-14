let str1 = "ABCD";
let str2 = "CDAB";
if(str1.length === str2.length && (str1+str1).includes(str2)){
    console.log(true);
}else{
    console.log(false);
}