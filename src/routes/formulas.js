const express = require('express');
const router = express.Router();

// connexion sql 
const mysqlConnection = require('../bd/database');

// crear URL PARA ACCEDER A LOS DATOS 

router.get('/', (req, res)=>{
    mysqlConnection.query(' SELECT * FROM  tb_datos td ', (err, rows, fields) =>{
        if (!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
});

router.get('/:id', (req, res)=>{
  //req.params;
  const {id} = req.params;
  //console.log(id);
  mysqlConnection.query('SELECT * FROM  tb_datos td WHERE id_dts = ?', [id], (err, rows, fields) => {
    if(!err){
			res.json(row[0]); 
		} else {
			console.log(err);
		}
  });
});

//ruta 
router.post()

module.exports = router;