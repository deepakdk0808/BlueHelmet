const express = require('express')

const connect=require("./configs/db")
const workerController=require("./controllers/workers.controllers") 
 

const app = express()
app.use(express.json())

app.use("/worker",workerController)


app.listen(8543, async function () {
    try {
        await connect()
        console.log('listening on port 8543')
    } catch (error) {
        console.log('error:', error)
    }
})