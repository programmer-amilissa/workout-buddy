const express = require('express')
const Workout = require('../models/workoutModel')

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
router.post('/', async(req, res) => {
    const {title, reps, load} = req.body;

    try {
        const workout = await Workout.create({
            title, reps, load
        })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

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