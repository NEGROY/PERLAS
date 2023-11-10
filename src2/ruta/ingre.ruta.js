import { Router } from "express";
import { postDataIndi00, postDataIndi, pRUEBA11, PostMultiDatos } from "../controllersXD/ingre.control.js";

const router = Router()

// PARA INGRESAR UN DATO  a la tabla de indicadores ingresar para los nuevos trimestres
router.post('/PRUBA', pRUEBA11 );
router.post('/ingre', postDataIndi );
router.post('/postDatos', PostMultiDatos );
// -------------


//SE EXPORTA ()
export default router
