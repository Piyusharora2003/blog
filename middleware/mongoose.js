import mongoose from "mongoose";

// const connectDb = handler => async(req,res) =>{
//     console.log("get called");
//     try{
//         console.log("in mongoose");
//         console.log(await mongoose.connect(url));
//         console.log("in mongoose");
//         if(mongoose.connections.readyState){
//             return handler(req,res);
//         }
//         const url=  process.env.DB
//         // console.log(mongoose.connection.readyState);
//         return handler(req,res);
//     }catch{
//         console.log('Error cnnecting to data base..')
//         return JSON.stringify({error:"connecting db"})
//     }
// }

const connection = {};

export default async function connectDb() {
    if (connection.isConnected) {
        return;
    }
    if (mongoose.connections.length > 0) {
        connection.isConnected = mongoose.connection.readyState;
        if (connection.isConnected === 1) {
            return;
        }
        await mongoose.disconnect();
    }
    let db;
    try {
        db = await mongoose.connect(process.env.MONGODB_URL);
    } catch (error) {
        console.log("error in string");
    }
    connection.isConnected = db.connection.readyState;
}

