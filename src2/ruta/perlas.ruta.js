import { Router } from "express";
import {conn} from "../bd/database.js";
import { getIndi, getTri, getVarData } from "../controllersXD/perlas.control.js";
//CREO MI CONSTANTE PARA LA RUTAS LOCAS 
const router = Router()

/********* DESDE AQUI EMPEZAMOS A VER LAS FUNCIONES DE NUESTRAS RUTAS  ********** */

// CON EL CODIGO DE LOS INDICADORES SE TRAERA TODOS LOS INDICADORES DE ESE VALOR  // //(localhost:3000/indi/P1)
router.get('/indi/:id', getIndi );

// CON EL CODIGO DE LOS INDICADORES SE TRAERA TODOS LOS INDICADORES DE ESE VALOR  //(localhost:3000/indi/Primer/P1)
router.get('/indi/:tri/:id', getTri );

// TRAE CADA UNO DE LOS DIFERENTES INDICADORES, por su tipo (P,E,A,R,L,S), por year anio
router.get('/varData/:id/:year', getVarData );



//SE EXPORTA ()
export default router

/* la idea es que aqui se traiga los datos de los indicadores, por ejemplo que se pueda bvuscar 
-  obtener todos los datos de P1, todos los años y todos los timesrtres solo se filtra por perla ( p1, P2, P3 ... S9 )
-  por trimestre y HE INDICE ( debera de traer cada uno de los datos se filtra por INDICE ( p1, P2, P3 ... S9 ) )
-  POR INDICE Y AÑO , trae todos los ( p1, P2, P3 ... S9 ) de un año especifico. 
- 
 */