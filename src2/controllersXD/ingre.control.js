import {conn} from "../bd/database.js";

// PRIMERA  PRUEBA, para verbo post 
export const postDataIndi00 = (req, res)=>{
    const {id} = req.params;
    //  conn.query('INSERT INTO tb_datos VALUES (null,?,?, 12,"2023-11-06 10:55:05.000", "Segundo", "Mayo", 2024)',[] );
    //para ver que devuelcva por consolas
    console.log(req.body) ////console.log(req.body)
    res.send('Post exitoso')
}

// POST PARA EL IGRESO DE DATOS, TB_DATOS (hasta que se arreglo esa mierda, revisar las notas al fondo )
export const postDatos = async (req, res)=>{
  // constante para almacenar datos POST 
  const {INDI,FORMULA} = req.body ////console.log(req.body) 
  /**  AQUI HACE FALTA VALIDACIONES (DE DATOS, FECHAS  ENTRE OTROS )  **/
  //CONSULTA SQL PARA HACER EL INSERT  (PARA QUE FUNCIONE EL AWAIT hay que coloca el async)
  try {
    const rows = await conn.query('INSERT INTO tb_formula (INDI,FORMULA) VALUES (?,?)', [INDI,FORMULA])
     //res.send("{rows}") //res.send({rows})
    res.json({id:rows.insertId,INDI,FORMULA}) 
  } catch (error) {
    console.log(error)
  }  
} 

// funcion para el ingreso de tb_Datos, esta info es para el ingreso de los datos de la BD y despues procesar los valores 
export const postDataIndi = async (req,res)=>{
  //se declaran los valores que se esperan, con REQ.BODY
    const {id_dts,INDI,vari,value,date,Trimestre,Mes,year} = req.body
    
}


/*
    *INSERT INTO tb_datos 
    (id_dts, INDI,var,value,date,Trimestre,Mes,year) VALUES 
    (NULL, "P1", "a", 12,"2023-11-06 10:55:05.000", 'Segundo', 'Mayo', 2024)
    {
  "id_dts": 1,
  "INDI": "P1",
  "var": "a",
  "value": 1500,
  "date": "2023-08-29 10:55:05.000",
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
*/