// vamos a exportar mis rutas para otros archivos 
const { Router } = require('express');
const router = Router();


//  ROUTES
router.app.get('/', (req, res) =>{
    //res.send('HOLA PUTAS');
    res.json({
        "nombre": "Juan",
        "edad": 30
    });
});


//  ROUTES
router.app.get('/test', (req, res) =>{
    //res.send('HOLA PUTAS');
    const data  = { "nombre": "PEDRO", "edad": 20 }; 
    res.json(data);
});


module.exports = router; 