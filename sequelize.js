const Sequelize = require('sequelize')

const TareasModel = require('./models/tareas')
const DBURL = 'mysql://root:112358@localhost:3306/crud-basico'

const sequelize = new Sequelize(DBURL)

const Tareas = TareasModel(sequelize,Sequelize)

sequelize.sync()
.then(() => {
    console.log('Tarea completada')
})

module.exports = {
    Tareas
}