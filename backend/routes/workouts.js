const express = require('express')


const router = express.Router()

// GET all workouts
router.get('/', (req, res)=> {
    res.json({msg:"GET all workouts"})
})

// GET single workout
router.get('/:id', (req, res)=> {
    res.json({msg: 'GET single workout'})
})

// POST a workout
router.post('/', (req, res) =>{
    res.json({msg:"POST a new workout"})
})

// DELETE a workout
router.delete('/:id', (req, res) =>{
    res.json({msg:"DELETE a new workout"})
})

// UPDATE a workout
router.patch('/:id', (req, res) =>{
    res.json({msg:"UPDATE a new workout"})
})


module.exports = router