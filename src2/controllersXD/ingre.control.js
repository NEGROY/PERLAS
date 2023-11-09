import {conn} from "../bd/database.js";

/*************************************************************************************************************************** */
/*************************************************************************************************************************** */
// PRIMERA  PRUEBA, para verbo post 
export const postDataIndi00 = (req, res)=>{
    const {id} = req.params;
    //  conn.query('INSERT INTO tb_datos VALUES (null,?,?, 12,"2023-11-06 10:55:05.000", "Segundo", "Mayo", 2024)',[] );
    //para ver que devuelcva por consolas
    console.log(req.body) ////console.log(req.body)
    res.send('Post exitoso')
}

/*************************************************************************************************************************** */
/*************************************************************************************************************************** */
// POST PARA EL IGRESO DE DATOS, TB_DATOS (hasta que se arreglo esa mierda, revisar las notas al fondo )
  export const pRUEBA11 = async (req, res)=>{
  // constante para almacenar datos POST 
    const {indi,FORMULA} = req.body ////console.log(req.body) 
  /**  AQUI HACE FALTA VALIDACIONES (DE DATOS, FECHAS  ENTRE OTROS )  **/
  // Validación para comprobar si las variables no están vacías
  if (!indi || !FORMULA) {
    return res.status(400).json({ error: 'indi y FORMULA son campos obligatorios' });
  }
  // Validación para comprobar si FORMULA menciona los valores (Primer, Segundo, Tercero, Cuarto) 
  const formulaValues = ['Primer', 'Segundo', 'Tercero', 'Cuarto'];
  if (!formulaValues.some(value => FORMULA.includes(value))) {
    return res.status(400).json({ error: 'FORMULA debe mencionar al menos uno de los valores: Primer, Segundo, Tercero, Cuarto' });
  }
  // Obtener la fecha y hora actual en el formato especificado (023-08-29 10:55:05.000)
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(2, 19).replace('T', ' ');
  //CONSULTA SQL PARA HACER EL INSERT  (PARA QUE FUNCIONE EL AWAIT hay que coloca el async)
    try {
      const rows = await conn.query('INSERT INTO tb_formula (INDI,FORMULA) VALUES (?,?)', [indi,FORMULA])
      //res.send("{rows}") //res.send({rows})
      res.json({id:rows.insertId,formattedDate,indi,FORMULA}) 
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Hubo un error al procesar la solicitud' });
    }  
  } 

  /*************************************************************************************************************************** */
  /*************************************************************************************************************************** */
// funcion para el ingreso de tb_Datos, esta info es para el ingreso de los datos de la BD y despues procesar los valores 
export const postDataIndi = async (req,res)=>{
  //se declaran los valores que se esperan, con REQ.BODY
    const {indi,vari,valor,Trimestre,Mes,year} = req.body
  /* ** SE CREA UNA VALIDACION DE DATOS QUE SEAN LO QUE SE ESPERA O  ** */
  if (!indi|| !vari|| !valor|| !Trimestre|| !Mes|| !year) {
    return res.status(400).json({ error: 'TODOS son campos obligatorios' });
  }
  // VALIDA QUE TENGA TRIMESTRE UN VALOR NECESARIO
  const formulaValues = ['Primer', 'Segundo', 'Tercero', 'Cuarto'];
  if (!formulaValues.some(value => Trimestre.includes(value))) {
    return res.status(400).json({ error: 'Trimestre debe mencionar al menos uno de los valores: Primer, Segundo, Tercero, Cuarto' });
  }
  // Validación para comprobar si "year" es un año válido (mayor o igual a 2020 y menor que 2030)
  if (isNaN(year) || year < 2020 || year >= 2030) {
    return res.status(400).json({ error: 'El campo AÑO(Year) debe ser un año válido, mayor o igual a 2020 y menor a 2030' });
  }
  // Obtener la fecha y hora actual en el formato especificado (023-08-29 10:55:05.000)
    const currentDate = new Date();
    const fechaSys = currentDate.toISOString().slice(2, 19).replace('T', ' ');
  //---- SE REALIZA EL INSERT
  try {
    const rows = await conn.query('INSERT INTO tb_datos (INDI,var,value,date,Trimestre,Mes,year) value (?,?,?,?,?,?,?)', 
    [indi,vari,valor,fechaSys,Trimestre,Mes,year])
    //Respomdemos con los datos traidos
    res.json({id:rows.insertId,indi,vari,valor,fechaSys,Trimestre,Mes,year}) 
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Hubo un error al procesar la solicitud' });
  }
}

/*************************************************************************************************************************** */
/*************************************************************************************************************************** */
// FUNCION PARA AGREGAR VALORES 
export const postDatos = async (req, res) => {
  // Array de objetos JSON con datos
  const data = req.body;
  // Validación para comprobar si el arreglo de datos está presente
  if (!Array.isArray(data) || data.length === 0) {
    return res.status(400).json({ error: 'Se requiere un arreglo de datos JSON' });
  }
  // Validación y procesamiento de cada objeto en el arreglo
  const insertedData = [];
  for (const item of data) {
    const { indi, vari, valor, Trimestre, Mes, year, FORMULA } = item;
    if (!indi || !vari || valor === undefined || !Trimestre || !Mes || year === undefined || !FORMULA) {
      return res.status(400).json({ error: 'Cada objeto debe contener todos los campos obligatorios' });
    }
    // Aquí puedes realizar cualquier otra validación necesaria para cada objeto
    // Consulta SQL para hacer el INSERT (para que funcione el AWAIT, hay que colocar async)
    try {
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString().slice(2, 19).replace('T', ' ');
      const rows = await conn.query('INSERT INTO tb_formula (INDI, VARI, VALOR, TRIMESTRE, MES, YEAR, FORMULA, FECHA_HORA) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [indi, vari, valor, Trimestre, Mes, year, FORMULA, formattedDate]);
      insertedData.push({ id: rows.insertId, indi, vari, valor, Trimestre, Mes, year, FORMULA, FECHA_HORA: formattedDate });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Hubo un error al procesar la solicitud' });
    }
  }
  res.json(insertedData);
}


/*
    *INSERT INTO tb_datos 
    (id_dts, INDI,var,value,date,Trimestre,Mes,year) VALUES 
    (NULL, "P1", "a", 12,"2023-11-06 10:55:05.000", 'Segundo', 'Mayo', 2024)
    {
  "id": 1,
  "indi": "P1",
  "vari": "a",
  "valor": 1500,
  "fechaSys": "2023-08-29 10:55:05.000",
  "Trimestre": "Primer",
  "Mes": "enero",
  "year": 2024
}

//const [rows] = await conn.query('INSERT INTO tb_datos (id_dts,INDI,var,value,date,Trimestre,Mes,year) VALUES (?,?,?,?,?,?,?,?)', [id_dts,INDI,vari,value,date,Trimestre,Mes,year])

- se instalo el paquete de mysql2, tambien se trabajo con POOL, para la base de datos
- tambien se trabajo con mpromise . -- mysql2/promise
- de esta forma se puede usar async,await se retorna , [
  ResultSetHeader {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 57,
    info: '',
    serverStatus: 2,
    warningStatus: 0,
    changedRows: 0
  },
  undefined
]

//------ EJEMPLO
  [{ "id": 1,  "indi": "P1",  "vari": "a",  "valor": 15000,  "Trimestre": "Cuarto",  "Mes": "Diciembre",
  "year": 2023,  "FORMULA": "100" }, 
  {  "id": 1,  "indi": "P1",  "vari": "b",  "valor": 100,  "Trimestre": "Cuarto",  "Mes": "Diciembre",
  "year": 2023,  "FORMULA": "100" },  
{  "id": 1,  "indi": "P1",  "vari": "c",  "valor": 10000,  "Trimestre": "Cuarto",
  "Mes": "Diciembre",  "year": 2023,  "FORMULA": "100"} ]
*/