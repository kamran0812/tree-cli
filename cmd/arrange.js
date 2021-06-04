let fs = require("fs");
let path = require("path");
const utility = require("./utility");
let types =utility.types;
let destPath;

function organize(dirPath){
if(dirPath==undefined){
 dirPath = "./";

}

  let doesExist = fs.existsSync(dirPath);
  if(doesExist){
   destPath =path.join(dirPath,"organized_files");
    if(!fs.existsSync(destPath)){
      console.log("Strating..");
      fs.mkdirSync(destPath);
}
  }
else {
    console.log("Path doesnot Exist");
    return;

  }

helper(dirPath,destPath);

}



function helper(src,dest){
  let child = fs.readdirSync(src);
 /*  console.log(child); */
for(let i=0;i<child.length;i++){
 let address = path.join(src,child[i]); 
let isFile =  fs.lstatSync(address).isFile();
  if(isFile){
  // console.log(address); 
    let catagory=getType(address);
    //console.log(catagory); 
    sendFile(address,dest,catagory);
  }
}


}

function sendFile(src,dest,type){
let catPath =path.join(dest,type);
if(fs.existsSync(catPath)==false){
fs.mkdirSync(catPath);
}
let fileName = path.basename(src);
let destPath = path.join(catPath,fileName);
fs.copyFileSync(src,destPath);
fs.unlinkSync(src);
console.log("Moved..",fileName," to ",type);


}

function getType(src){
let ext = path.extname(src);
 ext = ext.slice(1);
 // console.log(ext);
for(let type in types){
  let t = types[type];
  for(let i=0;i<t.length;i++)
  {
    if(ext==t[i]){
    return type;
          }
  }

}
return "others";
}

module.exports ={arrange:organize};

