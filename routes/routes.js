import express from "express";
import {
    loginUsu, getEscuelas, getMesas, getMesasCargadas, getCertificado, getLemas, getAgrupaciones, getGobResult, getIntResult, 
    getOtrosResult, createGob, createInt, getOtros, createOtrosVotos, updateMesa, updateGob, updateInt, updateOtrosVotos,
    getTotalGobDip, getTotalIntConConv, getTotalOtrosVotos, getTotalMesas, getTotalMesasCargadas
} from "../controllers/Controller.js";



const router = express.Router();

router.get('/escuelas', getEscuelas)
router.get('/mesas', getMesas)
router.get('/mesascargadas', getMesasCargadas)
router.get('/certificado', getCertificado)
router.get('/lemas', getLemas)
router.get('/otrosvotos', getOtros)
router.get('/agrupaciones', getAgrupaciones)
router.get('/gobresultados/:mesa', getGobResult)
router.get('/intresultados/:mesa', getIntResult)
router.get('/otrosresultados/:mesa', getOtrosResult)
router.post('/gobernador', createGob)
router.post('/intendente', createInt)
router.post('/otrosvotos', createOtrosVotos)
router.put('/mesa/:num', updateMesa)
router.put('/updategob/:num', updateGob)
router.put('/updateint/:num', updateInt)
router.put('/updateotros/:num', updateOtrosVotos)
router.get('/totalgobdip', getTotalGobDip)
router.get('/totalintconconv', getTotalIntConConv)
router.get('/totalotrosvotos', getTotalOtrosVotos)
router.get('/totalmesas', getTotalMesas)
router.get('/totalmesascargadas', getTotalMesasCargadas)

// router.get('/nota/:id', getNota)
//router.post('/', inject('gob'), createGob)
// router.put('/nota/:id', updateNota)
// router.delete('/nota/:id', deleteNota)

// router.post('/register', createUsu)
router.get('/login/:usuario', loginUsu)



export default router