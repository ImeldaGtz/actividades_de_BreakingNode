import express from "express";
const app = express();

app.get('/', (req, res) => {    //Se usa para que cuando reciba nada, regrese Hallo
    res.send('Hallo');
});

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});