import mongoose from "mongoose";

const connectToDB = (url) => {
    return mongoose.connect(url,{
        useNewUrlParser: true
    });
}

export default connectToDB;