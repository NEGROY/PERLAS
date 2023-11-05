const express = require('express');
const router = express.Router();
// connexion sql 
const mysqlConnection = require('../bd/database');


// crear URL PARA ACCEDER A LOS DATOS y hacer peticiones 
router.get('/', (req, res)=>{
    mysqlConnection.query('SELECT * FROM tb_datos WHERE INDI = "P1" ', (err, rows, fields) =>{
        if (!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

// CON EL CODIGO DE LOS INDICADORES SE TRAERA TODOS LOS INDICADORES DE ESE VALOR 
router.get('/:id', (req, res)=>{
    const {id} = req.params;
    mysqlConnection.query('SELECT * FROM tb_datos WHERE INDI = ?', [id], (err, rows, fields) =>{
        if (!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

// CON EL CODIGO DE LOS INDICADORES SE TRAERA TODOS LOS INDICADORES DE ESE VALOR 
router.get('/:tri/:id', (req, res)=>{
    const {tri,id} = req.params;
    mysqlConnection.query('SELECT * FROM tb_datos WHERE Trimestre = ? and INDI = ?', [tri,id], (err, rows, fields) =>{
        if (!err){
          res.json(rows);
        }else{
          console.log(err);
        }
    });
});

// TRAE CADA UNO DE LOS DIFERENTES INDICADORES, por su tipo (P,E,A,R,L,S)
router.get('/indi/', (req, res)=>{
    const {id} = req.params;
    mysqlConnection.query('SELECT ABR, TITULO , PROP  FROM tb_detalle ', (err, rows, fields) =>{
        if (!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});


//ruta 
module.exports = router;