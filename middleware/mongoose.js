import mongoose from "mongoose";

const connectDb = handler => async(req,res) =>{
    try{

        if(mongoose.connections[0].readyState){
            return handler(req,res);
        }
        const url=  process.env.DB
        await mongoose.connect(url);
        return handler(req,res);
    }catch{
        console.log('Error cnnecting to data base..')
    }
}

export default connectDb;