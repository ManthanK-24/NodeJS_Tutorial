
// File System Module.js

// Below print statements can follow any order in printing depending upon 
// time it takes for a specific task

const fs = require('fs');

fs.writeFile('file2.txt',"This is data File",()=>{
    console.log('Finished writing to a file2');
})

fs.readFile('file.txt','utf8',(err,data)=>{
    console.log(err,data);
})
// For Computing above function takes a bit more time than below console.log
// So as Node.js works on Non-Blocking IO Mode, it defers above funtion.
console.log('Finished Reading the File using fs.readFile')

// But sometimes we also need intentional blocking

const a = fs.readFileSync('file.txt');
console.log(a.toString())
console.log('Finished Reading File using readFileSync');


