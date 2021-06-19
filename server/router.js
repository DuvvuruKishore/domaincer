import express from 'express'
import { signup } from './controllers/users.js';
import { signin } from './controllers/users.js';
import User from './schema/user.js';

const router=express.Router();

router.post('/signin',signin);
router.post('/signup',signup)

router.get('/get/signup',(req,res)=>{
    User.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    })
})

export default router;