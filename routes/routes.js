import express from "express";
import {
    loginUsu, getEscuelas, getMesas, getLemas, getAgrupaciones, createGob, createInt
} from "../controllers/Controller.js";



const router = express.Router();

router.get('/escuelas', getEscuelas)
router.get('/mesas', getMesas)
router.get('/lemas', getLemas)
router.get('/agrupaciones', getAgrupaciones)
router.post('/gobernador', createGob)
router.post('/intendente', createInt)
// router.get('/nota/:id', getNota)
//router.post('/', inject('gob'), createGob)
// router.put('/nota/:id', updateNota)
// router.delete('/nota/:id', deleteNota)

// router.post('/register', createUsu)
router.get('/login/:usuario', loginUsu)



export default router