import { Router } from "express";

import { getdetalle, getdetalleID, getFormula } from "../controllersXD/formu.control.js";
//CREO MI CONSTANTE PARA LA RUTAS LOCAS 
const router = Router()


//primera endpoints y rutas, con sus respectivos metodos (GET, POST, PUT, DELETE)
router.get('/titulo', getdetalle);

//para buscar cada uno de los detalles por INDICADOR 
router.get('/titulo/:id', getdetalleID);

//TRAE TODOS LAS FORMULAS Y las trae en formato **LaTeX** (BUSCA PORCADA UNA DE LOS TITULOS (P E A R L S)) //localhost:3000/formula/p
router.get('/formula/:id', getFormula);

//


//SE EXPORTA ()
export default router