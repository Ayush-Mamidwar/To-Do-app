const {Router} = require('express')

const router  = Router()
const todoModel = require('../models/ToDoModels')

router.get("/",async (req,res)=>{
    const todo = await todoModel.find();
    res.send(todo)
})

router.post("/save",async (req,res)=>{
    const {task} = req.body;
    todoModel.create({task})
    .then((data)=>{
        console.log(data)
        console.log("data added successfully")
        res.send(data)
    })
    .catch((err)=>{console.log(err)})
})

router.post("/update",(req,res)=>{
    const {_id,task} = req.body;


    todoModel.findByIdAndUpdate(_id,{task})
    .then((data)=>{console.log(data) 
        res.status(201).send("updated successfully...")})
    .catch((err)=>{console.log(err)})
})


router.post("/delete",(req,res)=>{
    const {_id} = req.body;


    todoModel.findByIdAndDelete(_id)
    .then((data) => {console.log(data);
        res.status(201).send("deleted successfully...");
    }).catch((err) => {
        console.log(err);
        res.status(500).send("Internal Server Error");
    });
})

module.exports = router;