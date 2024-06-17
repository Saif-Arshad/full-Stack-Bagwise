import mongoose from "mongoose"


let isConnected = false;

export const ConnectDB = async () => {

    if (isConnected) return;

    try {
        console.log(process.env.MONGODB_URL!)
        await mongoose.connect(process.env.MONGODB_URL!)
        isConnected = true;
        console.log("DB is connected")
    } catch (error:any) {
        console.log("Some Error in connecting DB", error)
    }
}
