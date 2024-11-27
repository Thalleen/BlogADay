
const fs = require("fs"); 
// Reading files

// // this function here will take time to read from the file once it is done the async function gets executed
// fs.readFile("./docs/blog1.txt",(err,data)=>{
//     if(err){
//         console.log(err);
//     }

//     console.log(data.toString());
// });

// //this will get executed first because the above async function takes time
// console.log("Me First")

//Writing Files

// fs.writeFile("./docs/blog1.txt", "Node is fun", (err) => {
//     if (err) {
//         console.error("Error writing file:", err);
//     } else {
//         console.log("File written successfully!");
//     }
// });


// // here if you give a filename which does not exist it will create a new file with the given name
// fs.writeFile("./docs/blog2.txt", "Node is fun", (err) => {
//     if (err) {
//         console.error("Error writing file:", err);
//     } else {
//         console.log("File written successfully!");
//     }
// });


// Directories

// create directory only if it does not exist
// if(!fs.existsSync("./dir_name")){
//     fs.mkdir("./dir_name", (err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log("Directory created successfully")
//     });
// }else{ // this will remove if the directory alreadyt exists
//     fs.rmdir("./dir_name",(err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log("Directory removed")
//     })
// }

//Delete Files

// if(fs.existsSync("./docs/deleteme.txt")){
//     fs.unlink("./docs/deleteme.txt",(err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log("File Deleted")
//     });
// };
