const Task = require('../controller/tasks')



module.exports = function(app){

    app.get('/', (req,res)=>{
        
    })

    app.get('/tasks', (req,res)=>{
        Task.home(req,res)
    })

    app.post('/new/task', (req,res)=>{
       Task.createOne(req,res)
    })

    app.get('/show/:id', (req,res)=>{
        Task.showOne(req,res)
    })

    app.put('/update/:id', (req,res)=>{
        Task.editOneProcess(req,res)
    })

    app.delete('/delete/:id', (req,res)=>{
        Task.destroyOne(req,res)
    })

}