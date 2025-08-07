import { config } from 'dotenv'
import express from 'express'
import router from './routes/admin.js'
import complainRouter from './routes/complains.js'
import mongoclientdb from './db/connect.js'

config()
mongoclientdb
const server = express()
server.use(express.urlencoded({ extended: true }));
server.use(express.json())

server.use('/',complainRouter)
server.use('/',express.static('public'))


export default router
server.listen(process.env.PORT,()=>{
    console.log(`listening on port: ${process.env.PORT}`)
})