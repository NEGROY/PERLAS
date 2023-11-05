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
    conn.query('SELECT ABR, TITULO , PROP  FROM tb_detalle ', (err, rows, fields) =>{
        if (!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
}