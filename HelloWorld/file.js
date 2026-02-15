//fs stands for file system
//Writing in the file
const { Console, log } = require('console');
const fs = require('fs');

//Synchronous call
fs.writeFileSync('./test.txt','Hey there', (err)=>{});//(./ means the current directory)


//Async call
fs.writeFile('./async.txt','Hey its Async there', (err)=>{});


//Reading the file

//Synchronous call
const result = fs.readFileSync('./contact.txt', 'utf-8');
//console.log(result);

//Asynchronous call
/* fs.readFile('./contact1.txt', 'utf-8', (err,result) =>{
    if(err){
        console.log('Something went wrong');
        
    }else{
        console.log(result);
        
    }
}) */

//Appending in file

//fs.appendFileSync('./test.txt',  new Date().getDate().toLocaleString());

//Sync call
fs.appendFileSync('./test.txt',`, How are you??\n`);


//Copying files
fs.cpSync('./test.txt','./copy.txt');

//Reading
let data = fs.readFileSync('./copy.txt', 'utf-8');
console.log(data);
