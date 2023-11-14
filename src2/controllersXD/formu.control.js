import {conn} from "../bd/database.js";
import {validateYear, validateTrimestre} from "../include/fun.funciones.js";

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

/**************************************************************************************************************************** */
//para buscar cada uno de los detalles por INDICADOR
/*************************************************************************************************************************** */
export const getdetalleID = async (req, res)=>{
  const {id} = req.params;
  const rows = await conn.query('SELECT ABR,TITULO,PROP FROM tb_detalle WHERE PERLA = ?', [id] )
  // AGREGAR VALIDACION    //console.log(rows)
    if (rows[0].length<= 0)
    return res.status(404).json({message: '404 PERLA no encontrada'})
  // ME DEVUELVE TODA LA INFO //
    res.json(rows[0])
}

/**************************************************************************************************************************** */
//TRAE TODOS LAS FORMULAS Y las trae en formato **LaTeX** (BUSCA PORCADA UNA DE LOS TITULOS (P E A R L S))
/**************************************************************************************************************************** */
export const getFormula = async (req, res)=>{
    const {id} = req.params;
    const rows = await conn.query('SELECT tf.INDI,tf.FORMULA,td.PERLA,td.TITULO  FROM tb_formula tf INNER JOIN tb_detalle td ON tf.INDI = td.ABR  WHERE td.PERLA  = ?',[id] )
    // AGREGAR VALIDACION    //console.log(rows)
      if (rows[0].length<= 0)
      return res.status(404).json({message: '404 PERLA no encontrada'})
    // ME DEVUELVE TODA LA INFO //
      res.json(rows[0])
}
