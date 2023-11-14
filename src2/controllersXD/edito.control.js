import {conn} from "../bd/database.js";
import {validateYear, validateTrimestre} from "../include/fun.funciones.js";

/**************************************************************************************************************************** */
//para buscar cada uno de los detalles por INDICADOR
/*************************************************************************************************************************** */
export const getdetalleID = async (req, res)=>{
  const {id} = req.params; // ID DEL PARAMETRO EN URL
  const {name, valores} = req.body; // VALORES DESDE EL JSON
	const rows = await conn.query(' ', [id] )
  // UPDATE  tb_datos SET  valors=1200, Trimestre="Segundo", Mes="Abril" WHERE id_dts = 85
  
}