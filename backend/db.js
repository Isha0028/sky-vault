const mongoose= require('mongoose');

const mongoURI= "mongodb://localhost:27017/?readPreference=primary&appName=MongoDB+Compass&directConnection=true&tls=false"

const connectToMongo=()=>{
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo");

}

module.exports= connectToMongo;