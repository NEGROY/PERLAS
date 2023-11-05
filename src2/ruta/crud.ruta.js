import { Router } from "express";

import { getdetalle } from "../controllersXD/crud.control.js";
//CREO MI CONSTANTE PARA LA RUTAS LOCAS 
const router = Router()


//primera endpoints y rutas, con sus respectivos metodos (GET, POST, PUT, DELETE)
router.get('/', getdetalle);

//para buscar cada uno de los detalles por INDICADOR
router.get('/:id', getdetalleID);


//SE EXPORTA ()
export default router