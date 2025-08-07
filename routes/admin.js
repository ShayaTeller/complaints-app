import express from 'express'
import validateUser from '../middlware/middlware.js'

const router = express.Router()

router.post('/',validateUser,(req,res)=>{

})

export default router;
