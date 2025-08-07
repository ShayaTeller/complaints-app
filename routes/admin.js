import express from 'express'
import validateUser from '../middlware/middlware.js'
import mongoclientdb from '../db/connect.js';
import {GetAllComplains} from '../models/complaint.model.js'
const router = express.Router()

router.use('/admin',(req,res,next)=>{
    const username = req.body.username;
    const password = req.body.password
    const correntPassword = process.env.ADMIN_PASS;
    if(password==correntPassword){
        next()
    }
    else{
        res.status(404).send('not valid');
    }
})

router.post('/admin',async(req,res)=>{
    const result = await GetAllComplains()
    res.status(200).send(await result)
    }
)

export default router;
