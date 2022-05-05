const Tarea = require("../models/tarea");

// * CRUD Functions
// ? CREATE
function createTarea(req, res) {
    console.log("Creando tarea...");
    console.log(req.body);
    let tarea = new Tarea({
        id: req.body.id,
        name: req.body.name,
        puntos: req.body.puntos,
        materia: req.body.materia,
        fechaEntrega: req.body.fechaEntrega,
    })
    tarea.save((error, result) => {
        if (error) {
            return res.status(500).json({
                error: true,
                message: "Server down",
                code: 0
            });
        }
        if (!result) {
            return res.status(400).json({
                error: true,
                message: "Cliente error",
                code: 10
            });
        }
        return res.status(200).json({
            error: false,
            message: "OK",
            code: 20,
            data: result
        });
    })
}

// ? UPDATE
function updateTarea(req, res) {
    console.log("Actualizando tarea...");
    const tareaId = req.params.id; // id de de la tarea a actualizar
    const newTarea = req.body;
    // Body call
    Tarea.findByIdAndUpdate(tareaId, newTarea, { new: true }, (error, result) => {
        if (error) {
            return res.status(500).json({
                error: true,
                message: "Server down",
                code: 0
            });
        }
        if (!result) {
            return res.status(400).json({
                error: true,
                message: "Cliente error",
                code: 10
            });
        }
        return res.status(200).json({
            error: false,
            message: "OK",
            code: 20,
            data: result
        });
    });
}

// ? FIND ALL
function findAllTareas(req, res) {
    console.log("Obteniendo todas las tareas...");
    console.log(req.body);

    Tarea.find((error, result) => {
        if (error) {
            return res.status(500).json({
                error: true,
                message: "Server down",
                code: 0
            });
        }
        if (!result) {
            return res.status(400).json({
                error: true,
                message: "Cliente error",
                code: 10
            });
        }
        return res.status(200).json({
            error: false,
            message: "OK",
            code: 20,
            data: result
        });
    });
}

// ? FIND ALL
function deleteTarea(req, res) {
    console.log("Eliminando 1 tarea...");
    const tareaId = req.params.id; // id de de la tarea a actualizar
    console.log(req.body);

    Tarea.deleteOne({ id: tareaId }, (error, result) => {
        if (error) {
            return res.status(500).json({
                error: true,
                message: "Server down",
                code: 0
            });
        }
        if (!result) {
            return res.status(400).json({
                error: true,
                message: "Cliente error",
                code: 10
            });
        }
        return res.status(200).json({
            error: false,
            message: "OK",
            code: 20,
            data: result
        });
    });
}

module.exports = {
    createTarea,
    updateTarea,
    findAllTareas,
    deleteTarea
}