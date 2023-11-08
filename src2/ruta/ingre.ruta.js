import { Router } from "express";
import { postDataIndi, postDatos } from "../controllersXD/ingre.control.js";

const router = Router()

// PARA INGRESAR UN DATO  a la tabla de indicadores ingresar para los nuevos trimestres
router.post('/ingre', postDatos );

// -------------


//SE EXPORTA ()
export default router
