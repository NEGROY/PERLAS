import {conn} from "../bd/database.js";

//// CON EL CODIGO DE LOS INDICADORES SE TRAERA TODOS LOS INDICADORES DE ESE VALOR  // //(localhost:3000/indi/P1)
export const getIndi = (req, res)=>{
    const {id} = req.params;
    conn.query('SELECT * FROM tb_datos WHERE INDI = ?', [id], (err, rows, fields) =>{
        if (!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
}

// CON EL CODIGO DE LOS INDICADORES SE TRAERA TODOS LOS INDICADORES DE ESE VALOR  //(localhost:3000/indi/Primer/P1)
export const getTri = (req, res)=>{
    const {tri,id} = req.params;
    conn.query('SELECT * FROM tb_datos WHERE Trimestre = ? and INDI = ?',  [tri,id], (err, rows, fields) =>{
        if (!err){
        res.json(rows);
        }else{
        console.log(err);
        }
    });
  }

  // TRAE VALORS POR TRIMESTRE Y OPR AÑO POR UN TIPO DE INDICADOR
export const getVarData = (req, res)=>{
	const {id,year} = req.params;
	conn.query('SELECT * FROM indi_perlas WHERE PERLA = ? and year = ?',[id,year], (err, rows, fields) =>{
			if (!err){
					res.json(rows);
			}else{
					console.log(err);
			}
	});
}