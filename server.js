
const express = require("express");

const app = express();

app.get("/api/hola", (req, res) => {
    res.json({
        mensaje: "Hola Mundo",
        lenguaje: "JavaScript",
        framework: "Express"
    });
});

app.listen(3000, () => {
    console.log("Servidor ejecutándose en http://localhost:3000");
});
