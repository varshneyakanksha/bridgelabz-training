let str1="computer";
let str2="cat";
let result="";
for(let i=0;i<str1.length;i++){
    let found=false;

    for(let j=0;j<str2.length;j++){
        if(str1[i]===str2[j]){
            found=true;
            break;

        }
    
    
}
if(!found){
    result=result+str1[i];
}
}
console.log(result);