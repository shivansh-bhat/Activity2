let fs = require("fs");
let path = require("path");

let inputArr = process.argv.slice(2);
// let filePath = inputArr[0];
// let filePaths = inputArr;

// divide kruga -> - option Array main
// aur ->  file  array main
let optionsArr = [];
let filePaths = [];

for(let i=0; i<inputArr.length; i++){
    let firstChar = inputArr[i].charAt(0);
 // agar commmand hui toh "-" hoga start mein
    if(firstChar== "-"){
        optionsArr.push(inputArr[i]);
    }else{
        filePaths.push(inputArr[i]);
    }

}
// checking if the files in filesArray work or not
for(let i=0 ; i<filePaths.length;i++){
    let ans = fs.existsSync(filePaths[i]);
    if(ans==false){
        console.log("Error:: file does not exist ✌");
        return;
    }

}
let content = ""; 
for(let i=0; i<filePaths.length; i++){

    content = content + fs.readFileSync(filePaths[i]) + "\r\n";
   
}
let contentArr = content.split("\r\n");
// console.log(optionsArr);
// -s check 
console.log(contentArr);


let isPresent = optionsArr.includes("-s");
if(isPresent){
    for(let i=1; i<contentArr.length; i++){
        if(contentArr[i]=="" && contentArr[i-1]==""){
            contentArr[i] = null;
        }
        else if(contentArr[i]=="" && contentArr[i-1]==null){
            contentArr[i] =null;
            
        }
    }
    console.log(contentArr);
    let tempArr= [];
    for(let i=0; i<contentArr.length;i++){ 
        if(contentArr[i] != null){
            tempArr.push(contentArr[i]);
        }
    }
    contentArr = tempArr; 
    let updatecontent = contentArr.join("\n")
    console.log(contentArr)
    
    console.log(updatecontent)
}
// take indexes of both
let indexOfn = optionsArr.indexOf("-n");
let indexOfb = optionsArr.indexOf("-b");
//if both commands are present in the optionArr check which is first
if(indexOfn>-1 && indexOfb>-1){
    // if b is first execute it
    if(indexOfb<indexOfn){
        workcmdB(contentArr);
    }else{
        // else if n is first
        workcmdN(contentArr)
    }
}// if only b is present
else if(indexOfb > -1){
    workcmdB(contentArr);
    
}// if only n is present
else if(indexOfn > -1){    
    workcmdN(contentArr);
}
// if the n commandd function is called
function workcmdN(contentArr){
    let count = 1;
for(let i=0;i<contentArr.length;i++){
    contentArr[i] = count + " " +contentArr[i];
    count++;
}
}
// if the b command function is called
function workcmdB(contentArr){
    let count = 1;
    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i] != ""){
            contentArr[i] = count + " " +contentArr[i];
            count++;
        }
    }
}
// convert the array to string using join
let upcontent = contentArr.join("\n");
console.log(upcontent);



