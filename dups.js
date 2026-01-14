let str="programming";
let duplicates="";
for(let i=0;i<str.length;i++){
    if(
        str.indexOf(str[i])!==str.lastIndexOf(str[i])
        &&
        !duplicates.includes(str[i])
    ){
            duplicates+=str[i];
        }
    }
    console.log(duplicates.split(""));
