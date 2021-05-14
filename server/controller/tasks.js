const { Task } = require('../models/task')

module.exports = {

    home: function(req,res){
        Task.find()
        .then(data=>{
            res.json(data)
        })
        .catch(err=>console.log(res.json(err)))
    },


    createOne: function(req,res){
        const task = new Task()
        task.title = req.body.title 
        task.description = req.body.description
        task.completed = req.body.completed
        task.save()
            .then(data=>{
                res.json(data)
            })
            .catch(err=>{console.log(err); res.json(err)})
    },

    showOne: function(req,res){
        Task.findOne({_id: req.params.id})
            .then(data=>{
                console.log(data)
                res.json(data)
            })
            .catch(err=>{console.log(err); res.json(err)})
    },

    // editOne: function(req,res){
    //     Dog.findOne({_id: req.params.id})
    //     .then(dog =>{
    //         res.render('edit', {dog: dog})
    //     })
    //     .catch(err=>{
    //         res.redirect(`dogs/${req.params.id}`)
    //     })
    // },

    editOneProcess: function(req,res){
        Task.findOne({_id: req.params.id})
            .then(task=>{
                task.title = req.body.title
                task.description = req.body.description
                task.completed = req.body.completed
                task.save()
                    .then(data=>{
                        res.json(data)
                    })
                    .catch(err=>{res.json(err)})
            })
            .catch(err=>{err})
    },

    destroyOne: function(req,res){
        Task.findOneAndDelete({_id: req.params.id})
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{res.json(err)})
            
    }
}
