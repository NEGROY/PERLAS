import { Router } from "express";
import {conn} from "../bd/database.js";
//CREO MI CONSTANTE PARA LA RUTAS LOCAS 
const router = Router()

/********* DESDE AQUI EMPEZAMOS A VER LAS FUNCIONES DE NUESTRAS RUTAS  ********** */

// CON EL CODIGO DE LOS INDICADORES SE TRAERA TODOS LOS INDICADORES DE ESE VALOR  // //(localhost:3000/indi/P1)
router.get('/indi/:id', (req, res)=>{
    const {id} = req.params;
    conn.query('SELECT * FROM tb_datos WHERE INDI = ?', [id], (err, rows, fields) =>{
        if (!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

// CON EL CODIGO DE LOS INDICADORES SE TRAERA TODOS LOS INDICADORES DE ESE VALOR  //(localhost:3000/indi/Primer/P1)
router.get('/indi/:tri/:id', (req, res)=>{
  const {tri,id} = req.params;
  conn.query('SELECT * FROM tb_datos WHERE Trimestre = ? and INDI = ?',  [tri,id], (err, rows, fields) =>{
    if (!err){
      res.json(rows);
    }else{
      console.log(err);
    }
  });
});

// TRAE CADA UNO DE LOS DIFERENTES INDICADORES, por su tipo (P,E,A,R,L,S)
router.get('/detalle/:id', (req, res)=>{
	const {id} = req.params;
	mysqlConnection.query('SELECT ABR, TITULO , PROP  FROM tb_detalle WHERE PERLA =?',[id], (err, rows, fields) =>{
			if (!err){
					res.json(rows);
			}else{
					console.log(err);
			}
	});
});


//SE EXPORTA ()
export default router