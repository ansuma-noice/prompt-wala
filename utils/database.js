import mongoose from 'mongoose';

let isConnected=false;//track the connection

export const connectToDB=async()=>{
    mongoose.set('strictQuery',true);

    if(isConnected){
        console.log('mongoDB is connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName:'prompt',
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })

        isConnected=true;

        console.log('mongoDB connected');
    } catch (error) {
        console.log(error);
    }
}