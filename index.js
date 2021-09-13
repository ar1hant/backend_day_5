const fs =require("fs")

//o create folser in syncronous way 

// fs.mkdirSync("demofolder")


//to create a file
//if already exist file then write in side else create newfile  

//  fs.writeFileSync("demofolder/demo.txt", "hello awasome peaple how are you", (error)=>{
//     if(error){console.log(error);}
    
//  })

//  update file in sync mode 
// fs.appendFileSync("demofolder/demo.txt", "appended something", (err)=>{
//     if(err){
//         console.log(err);
//     }
// })

// to read in file 

// const data=fs.readFileSync("demofolder/demo.txt","utf-8")
// console.log(data)


// to renamefile


// fs.renameSync("demofolder/demo.txt",'demofolder/demo2.txt')

// to delete file
// fs.unlinkSync("demofolder/demo2.txt")