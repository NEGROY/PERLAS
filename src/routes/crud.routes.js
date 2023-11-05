const express = require('express');
const router = express.Router();
const mysqlConnection = require('../bd/database');


// TRAE CADA UNO DE LOS DIFERENTES INDICADORES, por su tipo (P,E,A,R,L,S)
router.get('/indi', (req, res)=>{
    const {id} = req.params;
    mysqlConnection.query('SELECT ABR, TITULO , PROP  FROM tb_detalle ', (err, rows, fields) =>{
        if (!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

export default router