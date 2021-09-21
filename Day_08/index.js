const express = require('express')

const app =express();

//as we can't access the req.query directly at line 69 so we need to use body-parser    
const bodyParser = require('body-parser');

app.listen (5000);



// app.get("/", (req, res, next) => {
//     console.log("in first");

//     if(req.query.admin === 'true'){
//         next()

//     }else{
//         res.status(400).send("should be admin");
//     }

// }, (req, res) => {
//     res.status(200)
//     res.json(req.query)

// });


// or we can write it as 





const checkAdmin =(req, res, next) => {
    console.log("in first");

    if(req.query.admin === "true"){
        next();

    }else{
        res.status(400).send("should be admin");
    }

}

const sendResponse =(req, res) => {
    res.status(200)
    res.json(req.query)
 
}


// app.use(checkAdmin);
//app.use will run before all the below url present in app.get
//sequence of middleware matters 


//to handle form-data
app.use(bodyParser.urlencoded({ extended: true }));

//for json 
app.use(bodyParser.json());     

app.get("/", sendResponse)

app.post('/', (rew, res)=> {
    console.log('req.body -> ', req.body);
    res.json({text:req.body})

})





