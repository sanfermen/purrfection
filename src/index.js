import express from "express";
import dotenv from "dotenv";
import router from "./routes/router.js";
import session from "express-session";

// cargar variables de entorno
dotenv.config();

// crear servidor express
const APP_PORT = process.env.APP_PORT;
const SESSION_SECRET = process.env.SESSION_SECRET;
const app = express();

app.use(express.json()); // para API (formato json)
app.use(express.urlencoded({extended:true})); // para Vistas (formato formulario)

//configurar motor de plantillas ¿?
app.set('views', 'src/views');
app.set('view engine', 'pug');


// configurar rutas
app.use("/",router);


// Iniciar servidor
app.listen(APP_PORT,()=>{
    console.log(`Backend conectado al puerto ${APP_PORT}`);
})