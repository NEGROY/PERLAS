import {conn} from "../bd/database.js";
import {validateYear, validateTrimestre} from "../include/fun.funciones.js";

/*************************************************************************************************************************** */
//// CON EL CODIGO DE LOS INDICADORES SE TRAERA TODOS LOS INDICADORES DE ESE VALOR  // //(localhost:3000/indi/P1)
/*************************************************************************************************************************** */
export const getIndi = async (req, res)=>{
    const {id} = req.params;
    const rows = await conn.query('SELECT * FROM tb_datos WHERE INDI = ?', [id]);
    //AGREGAR VALIDACION    //console.log(rows)
    if (rows[0].length<= 0)
    return res.status(404).json({message: '404 no se existe ese INDI'})
    // ME DEVUELVE TODA LA INFO //
    res.json(rows[0])
}

/*************************************************************************************************************************** */
//// CON EL CODIGO DE LOS INDICADORES SE TRAERA TODOS LOS INDICADORES DE ESE VALOR  // //(localhost:3000/indi/P1/Primer/2024)
/*************************************************************************************************************************** */
export const getIndiFind = async (req, res)=>{
	const {id,tri,year} = req.params;
  // Validación para comprobar si TRIMESTRE menciona los valores (Primer, Segundo, Tercero, Cuarto) 
		if (validateTrimestre(tri)) {
			return res.status(400).json({ error: 'TRIMESTRE debe mencionar al menos uno de los valores: Primer, Segundo, Tercero, Cuarto' });
		}
  // Validación para comprobar si "year" es un año válido (mayor o igual a 2020 y menor que 2030) // Validación Año
	if (validateYear(year)) {
		return res.status(400).json({ error: 'El campo AÑO(Year) debe ser un año válido, mayor o igual a 2020 y menor a 2030' });
	}
	//realiza la consulta despues de la validaciones maricas ¯\_(ツ)_/¯
		const rows = await conn.query('SELECT * FROM tb_datos WHERE  INDI = ? and Trimestre = ? and year = ?', [id,tri,year]);
	//AGREGAR VALIDACION    //console.log(rows)
		if (rows[0].length<= 0)
		return res.status(404).json({message: '404 no se existe ese INDI'})
	// ME DEVUELVE TODA LA INFO //
		res.json(rows[0])
}

/*************************************************************************************************************************** */
// CON EL CODIGO DE LOS INDICADORES SE TRAERA TODOS LOS INDICADORES DE ESE VALOR  //(localhost:3000/indi/Primer/P1)
/*************************************************************************************************************************** */
export const getTri = async (req, res)=>{
  const {tri,id} = req.params;
	// Validación para comprobar si TRIMESTRE menciona los valores (Primer, Segundo, Tercero, Cuarto) 
		if (validateTrimestre(tri)) {
			return res.status(400).json({ error: 'TRIMESTRE debe mencionar al menos uno de los valores: Primer, Segundo, Tercero, Cuarto' });
		}
	//realiza la consulta despues de la validaciones maricas (づ｡◕‿‿◕｡)づ
  	const rows = await  conn.query('SELECT * FROM tb_datos WHERE Trimestre = ? and INDI = ?',  [tri,id] );
	//AGREGAR VALIDACION    //console.log(rows)
		if (rows[0].length<= 0)
		return res.status(404).json({message: '404 no se existe ese INDI'})
	// ME DEVUELVE TODA LA INFO //
	res.json(rows[0])
}

/*************************************************************************************************************************** */
  // TRAE VALORS POR TRIMESTRE Y OPR AÑO POR UN TIPO DE INDICADOR
/*************************************************************************************************************************** */
export const getVarData = async (req, res)=>{
	const {id,year} = req.params;
  // Validación para comprobar si "year" es un año válido (mayor o igual a 2020 y menor que 2030) // Validación Año
		if (validateYear(year)) {
			return res.status(400).json({ error: 'El campo AÑO(Year) debe ser un año válido, mayor o igual a 2020 y menor a 2030' });
		}
	//realizo la consulta   (=^ ◡ ^=)
	const rows = await conn.query('SELECT * FROM indi_perlas WHERE PERLA = ? and year = ?',[id,year] );
	if (rows[0].length<= 0)
	return res.status(404).json({message: '404 no se existe ese INDI'})
	// ME DEVUELVE TODA LA INFO //
	res.json(rows[0])
}