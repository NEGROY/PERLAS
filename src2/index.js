import  express  from "express";
//a;ado mas ruitas
import crudes from './ruta/crud.ruta.js'
import perlas from './ruta/perlas.ruta.js'

const app = express()

//settings // PARA DEFINIR EL PUERTO 
app.set(`port`, process.env.PORT || 3000); // si un SO nos da un purto lo usamos si no el 3K
app.set(`json spaces`, 2);

// DESPUES DE IMPORTAR SE DEBE DE USAR LAS PETICIONES CREADAS 
app.use(crudes);
app.use(perlas);

// inicar el server 
app.listen( app.get('port'), ()=>{
    console.log('hola muchas');
    console.log(`puerto ${app.get('port')}`);
});