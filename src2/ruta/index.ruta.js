import { Router } from "express";
import { mysqlConnection } from '../bd/database';

//creo un enrutador en base a router
const router = Router()

router.get('/ping', async (req, res) => {
    const [result] = await mysqlConnection.query('SELECT * FROM tb_datos WHERE INDI = "P2"')
    res.json(result)
})

export default router