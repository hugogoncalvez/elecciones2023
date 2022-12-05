import express from "express";
import {
    loginUsu, getEscuelas, getMesas, getLemas} from "../controllers/Controller.js";



const router = express.Router();

 router.get('/escuelas', getEscuelas)
 router.get('/mesas', getMesas)
 router.get('/lemas', getLemas)
// router.get('/nota/:id', getNota)
// router.post('/nota/create', createNota)
// router.put('/nota/:id', updateNota)
// router.delete('/nota/:id', deleteNota)

// router.post('/register', createUsu)
router.get('/login/:usuario', loginUsu)



export default router