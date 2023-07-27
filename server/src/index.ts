import express, { Request, Response } from 'express'
import cors from 'cors'
import { config } from 'dotenv'

config()
const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req: Request, res: Response) => {

    return res.json({ok: true})
})

// process.env.PORT || 
app.listen(process.env.PORT || 3333, () => {
    console.log('Server Rodando!', process.env.PORT);
})