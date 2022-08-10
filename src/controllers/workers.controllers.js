const express=require('express')
const router =express.Router()

const Worker=require("../models/workers.models")

router.post('', async (req, res) => {
    try {
        const worker = await Worker.create(req.body)
        return res.send(worker)
    } catch (error) {
        return res.send(error)
    }
})

router.get('', async (req, res) => {
    try {
        const worker = await Worker.find().lean().exec()
        res.send(worker)
    } catch (error) {
        res.send(error)
    }
})


router.get('/:category', async (req, res) => {
    try {
        const worker = await Worker.find({category: req.params.category}).lean().exec()
        res.send(worker)
    } catch (error) {
        res.send(error)
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const worker = await Worker.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        res.send(worker)
    } catch (error) {
        res.send(error)
    }
})
 
router.delete('/:id', async (req, res) => {
    try {
        const worker = await Worker.findByIdAndDelete(req.params.id).lean().exec()
        res.send(worker)
    } catch (error) {
        res.send(error)
    }
})

module.exports=router