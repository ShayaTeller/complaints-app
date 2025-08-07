import express from 'express'

const complainRouter = express.Router()

complainRouter.post('/postComplain',(req,res)=>{
    const sobject = req.body.sobject;
    const complain = req.body.complain;
    console.log(`sobject: ${sobject}\ncomplain: ${complain}`)
    res.send('thank you!')
})

export default complainRouter