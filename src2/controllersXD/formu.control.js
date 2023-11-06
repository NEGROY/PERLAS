import {conn} from "../bd/database.js";

////primera endpoints y rutas, con sus respectivos metodos (GET, POST, PUT, DELETE)
export const getdetalle = (req, res)=>{
    const {id} = req.params;
    conn.query('SELECT ABR, TITULO , PROP  FROM tb_detalle ', (err, rows, fields) =>{
        if (!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
}

//para buscar cada uno de los detalles por INDICADOR
export const getdetalleID = (req, res)=>{
    const {id} = req.params;
    conn.query('SELECT ABR, TITULO , PROP  FROM tb_detalle WHERE PERLA = ?',[id] ,(err, rows, fields) =>{
        if (!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
}

//TRAE TODOS LAS FORMULAS Y las trae en formato **LaTeX** (BUSCA PORCADA UNA DE LOS TITULOS (P E A R L S))
export const getFormula = (req, res)=>{
    const {id} = req.params;
    conn.query('SELECT tf.INDI, tf.FORMULA , td.PERLA , td.TITULO  FROM tb_formula tf INNER JOIN tb_detalle td ON tf.INDI = td.ABR  WHERE td.PERLA  = ?',[id] ,(err, rows, fields) =>{
        if (!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
}



