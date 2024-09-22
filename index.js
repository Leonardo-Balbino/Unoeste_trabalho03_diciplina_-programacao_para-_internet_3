
import express from "express";
import rotaEvento from "./Rotas/rotaEvento.js";

const app = express();
const host = '0.0.0.0'; //todas as interfaces de rede
const porta= 4000;

app.use(express.json());
app.listen(porta, host, () => {

    app.use('/evento', rotaEvento)

//console.log(`Servidor iniciado em http://${host}:${porta}`)

})

