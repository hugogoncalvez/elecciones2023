import express from "express";
import {
    loginUsu, createUsu, getEscuelas, getMesas, createNota, updateNota, deleteNota} from "../controllers/Controller.js";



const router = express.Router();

 router.get('/escuelas', getEscuelas)
 router.get('/mesas', getMesas)
// router.get('/nota/:id', getNota)
// router.post('/nota/create', createNota)
// router.put('/nota/:id', updateNota)
// router.delete('/nota/:id', deleteNota)

// router.post('/register', createUsu)
router.get('/login/:usuario', loginUsu)



export default router