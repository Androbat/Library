require('dotenv').config();
const mongoose = require('mongoose');
<<<<<<< Updated upstream
const connectDB =  async ()=>{

    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            //must add in order to not get any error masseges:
            useUnifiedTopology:true,
            useNewUrlParser: true,
        })
        console.log(`mongo database is connected!!! ${conn.connection.host}`)
    }catch(error){
        console.error(`Error: ${error} `)
        process.exit(1) //passing 1 - will exit the proccess with error
    }

}

module.exports = connectDB;
=======

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log(`Mongo database is connected!!! ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error}`);
        process.exit(1); // Exit the process with an error code
    }
}

connectDB();

>>>>>>> Stashed changes

