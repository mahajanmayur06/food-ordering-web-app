import mongoose from "mongoose";

const dbConn = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
    }
    catch (err){
        console.log(err);
    }
}

export default dbConn