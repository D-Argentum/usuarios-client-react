require("dotenv").config()
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

// * Create server
const app = express();
// Define port
const port = 3001;
// Database connection 
mongoose.connect(process.env.DATABASE_URL_CLOUD, { useNewUrlParser: true });
// Get connection
const db = mongoose.connection;

// Set event manager
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Conectando a la base de datos..."));

// Middleware 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// * Routes
app.use("/tareas", require("./routes/tareas-routes"));

// * Init server
app.listen(port, () => console.log("El servidor esta escuchando..."))