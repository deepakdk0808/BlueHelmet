const express = require('express')

const connect=require("./configs/db")
const workerController=require("./controllers/workers.controllers") 
 

const app = express()
app.use(express.json())

const cors=require("cors")
app.use(cors())
const port=process.env.PORT ||8542

app.use("/worker",workerController)


app.listen(port, async function () {
    try {
        await connect()
        console.log(`listening on port ${port}`)
    } catch (error) {
        console.log('error:', error)
    }
})