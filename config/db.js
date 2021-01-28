const mongoose = require ('mongoose')

const connectDb = async () =>{
    const con = await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,  //to slove deprecation waring
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true



    });

    console.log('Mongo is conected ')
}


module.exports = connectDb;