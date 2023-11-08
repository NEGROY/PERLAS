import  express  from "express";
//a;ado mas ruitas
import crudes from './ruta/formu.ruta.js'
import perlas from './ruta/perlas.ruta.js'
import ingreso from './ruta/ingre.ruta.js'

const app = express()

//settings // PARA DEFINIR EL PUERTO 
app.set(`port`, process.env.PORT || 3000); // si un SO nos da un purto lo usamos si no el 3K
app.set(`json spaces`, 2);
app.use(express.json()); //para resivir y entender json

// DESPUES DE IMPORTAR SE DEBE DE USAR LAS PETICIONES CREADAS 
app.use(crudes);
app.use(perlas);
app.use(ingreso);

// inicar el server 
app.listen( app.get('port'), ()=>{
    console.log('hola muchas');
    console.log(`puerto ${app.get('port')}`);
});


/*
    * llamaremos a PERLA (CADA UNA DE LAS LETRAS DE P E A R L S )
    * LLAMAREMOS A los indicadores los cuales son (P1 P2 ... S9 ) PERO YA PROCESADOS
    * iNDICES (P1 P2 ... S9 ) PERO QUE NO SE HAN PROCESADOS
*/