require("dotenv").config();
const express = require("express");
const connectDB = require("./src/config/database.js");
const routes = require("./src/routes");

const app = express();

// Middlewares
app.use(express.json());

// Rutas
app.use("/", routes);

// DB + Server
connectDB();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});