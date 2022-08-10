const mongoose=require('mongoose')

const workerSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    gender:{ type: String, required: true },
    experience: { type: String, required: true },
    category:{type: String, required: true},
    location:{type:String,required:true},
    type:{type:String,required:true}
})
const Worker = mongoose.model('worker', workerSchema)

module.exports=Worker

