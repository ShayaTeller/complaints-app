import { config } from 'dotenv'
import express from 'express'
import router from './routes/amdin.js'
// import {mongoclientdb} from './db/connect.js'

config()
const server = express()
server.use(express.urlencoded({ extended: true }));
server.use(express.json())


server.use('/admin',router)
server.use('/1',express.static('public'))

server.listen(process.env.PORT,()=>{
    console.log(`listening on port: ${process.env.PORT}}`)
})