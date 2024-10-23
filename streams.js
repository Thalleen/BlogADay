const fs = require('fs')

const readStream = fs.createReadStream("./dir_name/stream_d.txt",{encoding:"utf-8"});
const writeStream = fs.createWriteStream("./dir_name/blog4.txt");

// readStream.on('data',(chunk)=>{
//     console.log("----NEW CHUNK----");
//     console.log(chunk);
//     writeStream.write(chunk);
// }) 


// PIPING

readStream.pipe(writeStream);