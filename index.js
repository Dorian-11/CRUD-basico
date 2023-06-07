// Creacion de express
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

//Puertos 
const port = 3000

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const {Tareas} = require('sequelize')
/* Metodo get */
app.get('/tareas',(req,res)=> {
    Tareas.findAll()
    .then(personas => {
        res.send(tareas)
    })
})

/* Metodo post */
app.post('/tareas/crud',(req,res)=> {
    console.log(req.body)
    Tareas.create({
        title: req.body.title ,
        description: req.body.apellidos,
        completed: req.body.completed
    }).then(tareas => {
        
        res.send('Tarea Creada')
    })
})

app.get('/tareas/ :id',(req, res) => {
    let tareasId = req.params.id
    Tareas.findOne({where:{id:id}})
    .then(tareas => {
        res.json(tareas)
    })
})
/* Metodo put */
app.put('/tareas/:id',(req, res)=>{
    let tareasId = req.params.id
    let nuevosDatos = req.body
    Tareas.findOne({where: { id: tareasId}})
    .then(tareas => {
        tareas.update(nuevosDatos)
        .then(nuevaTarea => {
            res.json(nuevaTarea)
        })
    }) 
})
/* Metodo delete */
app.delete('/tareas/:id',(req, res)=> {
    let tareasId = req.params.id

    Tareas.destroy({
        where: {id: tareasId }
    }).then(() => {
        res.send('Tarea Eliminada')
        
    })
})

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
})


// 
// 
// 
// Express JS API CRUD Sequelize