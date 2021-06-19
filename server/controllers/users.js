
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../schema/user.js';


export const signin=async(req,res)=>{
    const {email,password}=req.body;
    try{
      const existingUser=await User.findOne({email});
      if(!existingUser) return res.status(404).json({message:"User doesnt exist"});

      const isPasswordCorrect=await bcrypt.compare(password,existingUser.password);

      if(!isPasswordCorrect) return res.status(400).json({message:"invalid credits"});

      const token =jwt.sign({email:existingUser.email,id:existingUser._id},'test',{expiresIn:'1h'});

      res.status(200).json({result:existingUser,token});
    }catch(error){
  res.status(500).json({message:"something went wrong"});
    }
}

 export const signup=async(req,res)=>{
  const {email,password,confirmPassword,firstname,lastname}=req.body;
  try{
   const existingUser=await User.findOne({email});
   if(existingUser) return res.status(400).json({message:"user already exists"});

   if(password!==confirmPassword) return res.status(400).json({message:"password already exists"});

   const hashedpassword=await bcrypt.hash(password,10);
   const result=await User.create({email,password:hashedpassword,name:`${firstname} ${lastname}`});

   const token =jwt.sign({email:result.email,id:result._id},'test',{expiresIn:'1h'});
   res.status(200).json({result,token});
  }catch(error){
    res.status(500).json({message:"something went wrong"});
  }
}


