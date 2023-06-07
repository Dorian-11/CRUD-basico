module.exports	= (sequelize, type) => {
    const Tareas = sequelize.define('tareas',{
        title: {
            type: type.STRING
        },
        descriptipon: {
            type: type.STRING
        },
        completed: {
            type: type.STRING
        }
    },{
        timestamps: true
    })
    return Tareas
}