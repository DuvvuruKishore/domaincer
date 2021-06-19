import dotenv from 'dotenv';
dotenv.config();
import express from'express';
import mongoose from 'mongoose';
import Jobpost from './schema/jobpostSchema.js'
import cors from 'cors';
import userRoutes from './router.js';
import Apply from './schema/apply.js';



const app=express();
const port=process.env.PORT||5000;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useFindAndModify:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log('mongodb connected');
}).catch((error)=>{
    console.log(error);
})

app.get('/hi',(req,res)=>{
    res.status(200).send("hi");
})
app.use('/user',userRoutes);
app.get('/get/job',(req,res)=>{
    Jobpost.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    })
})

app.post('/post/job',(req,res)=>{
    const dbMessage=req.body;
   Jobpost.create(dbMessage,(err,data)=>{
       if(err){
           res.status(500).send(err);
       }else{
           res.status(201).send(data);
       }
   })
})

app.get('/get/apply',(req,res)=>{
    Apply.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    })
})

app.post('/post/apply',(req,res)=>{
    const dbMessage=req.body;
   Apply.create(dbMessage,(err,data)=>{
       if(err){
           res.status(500).send(err);
       }else{
           res.status(201).send(data);
       }
   })
})



app.listen(port,(()=>{
    console.log(`port is running on ${port}`)
}))
