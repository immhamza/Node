const express = require('express');
const morgan = require('morgan') //use for which type of request send by client
const app = express();
const dotenv = require('dotenv');
const connectDb = require('./config/db');

dotenv.config({path:'./config/config.env'}); // Set enviroment values of server i.e node

 connectDb();


app.use(morgan('dev')); //only for development purpose
app.use(express.json());// body parser
app.use(express.json({
        extended:true

}))

app.use('/student' ,require('./routes/students'))


// app.get('/',(erq,res,next)=>{
//     res.send("Server is working")

// })

const port  = 3000 || process.env.PORT;

app.listen(port,
    console.log('Server is runing...')
    )