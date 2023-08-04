import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import cors from 'cors'
import { config } from 'dotenv'

import { router } from './routes'

config()
const app = express()

app.use(express.json())
app.use(cors())

//  vamos receber todas as rotas do app por esse use.
app.use(router)

app.use((err: Error, req:Request, res: Response, next: NextFunction) => {
    
    if(err.message){
        console.log(err);
        res.json({message: err.message})
    }
})


app.listen(process.env.PORT, () => {
    console.log('Server Rodando!', process.env.PORT);
})