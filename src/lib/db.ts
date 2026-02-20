import mongoose from "mongoose";

const mongodbUrl = process.env.MONGODB_URI;

if (!mongodbUrl) {
    throw new Error("MONGODB_URI is not found");
}


let cached = (global).mongoose;

if (!cached) {
    cached = (global).mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
    
    if (cached.conn) {
        return cached.conn;
    }

    
    if (!cached.promise) {
        const opts = {
            bufferCommands: false, 
        };

        cached.promise = mongoose.connect(mongodbUrl, opts).then((mongooseInstance) => {
            console.log("MongoDB Connected Successfully");
            return mongooseInstance.connection;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (err) {
        cached.promise = null; 
        console.error("MongoDB Connection Failed :", err);
        throw err; 
    }

    return cached.conn;
};

export default connectDB;