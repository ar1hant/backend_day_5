Take aways of today's lecture:

Middleware are the function which execute before the actual function to check that everything is okay for the next function or not 

// app.use() to use a middleware before every api call


npm init 
npm install --save-dev nodemon 
npm install -save express

for post work 
npm install --save body-parser

Get is stored in cache.Hence not used for passwords.


Middlewares mostly used for authentication and login e.g.

app.get("/", (req,res,next) => {
   if(req.query.admin === 'true'){
       next();
   }
   else {
       res.status(401).send("should be admin");
   }
})

check the get call on localhost:5000/?admin=true;

express.use(express.static('public'))

since, body parser is depricated, it is added ultimately to express
app.use(express.urlencoded());
app.use(bodyparser.json());

path that you provide to the express.static function is relative to the directory from where you launch your node :
So,
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))

cache 
passwords are passed in post not in get calls because get calls save info in cache memeory to be more efficent and post does not save things in cache memory 
send by two means 1. form data, json 

for more info, go through express documentations
