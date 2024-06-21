import mongoose from "mongoose"


let isConnected = false;

export const ConnectDB = async () => {

    if (isConnected) return;

    try {
        await mongoose.connect(process.env.MONGODB_URL!)
        const {connection} = mongoose
        connection.on('connected',()=>{
            isConnected = true;
            console.log("DB is connected")
        })
        connection.on('error',(err)=>{
            isConnected = false;
            console.log("error in db connection",err)
            return
        })
    } catch (error:any) {
        console.log("Some Error in connecting DB", error)
    }
}
