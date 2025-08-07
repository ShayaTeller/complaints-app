import express from 'express'
import validateUser from '../middlware/middlware.js'

const router = express.Router()

router.get('/',validateUser,(req,res)=>{

})

export default router;
