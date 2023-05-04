// importar el Modelo
import UsuarioModel from "../Models/UsuarioModel.js"
import NotaModel from "../Models/EscuelaModel.js"
import EscuelaModel from "../Models/EscuelaModel.js";
import db from "../database/db.js";
import { QueryTypes } from "sequelize";
import MesasModel from "../Models/MesasModel.js";
import LemasModel from "../Models/LemasModel.js";
import GobModel from "../Models/GobModel.js";
import IntModel from "../Models/IntModel.js";
import AgrupacionesModel from "../Models/AgrupacionesModel.js";
import OtrosVotosModel from "../Models/OtrosVotosModel.js";
import OVRModel from "../Models/OtrosVotosResultModel.js";
import CertificadoModel from "../Models/CertificadoModel.js";




// metodos para el CRUD

// Clientes

// mostrar todos
// export const prueba = async (req, res) => {
//     try {
//         const projects = await db.query('SELECT * FROM inventarios', {
//             model: InvModel,
//             mapToModel: false // pass true here if you have any mapped fields
//         });
//         res.json(projects)
//         console.log(res)
//         //const resp = await InvModel.sequelize.query('Select * from Inventarios;')
//         //console.log(resp)
//         //  res.resp
//         // console.log(res)
//     } catch (e) {
//         console.log(e)
//     }
// }
export const getEscuelas = async (req, res) => {
    try {
        const escuelas = await EscuelaModel.findAll({
            order: [
                ["numero", "ASC"]
            ]
        })
        res.json(escuelas)
    } catch (error) {
        res.json({ message: error.message })
    }
}
export const getOtros = async (req, res) => {
    try {
        const otrosVotos = await OtrosVotosModel.findAll({
            order: [
                ["id", "ASC"]
            ]
        })
        res.json(otrosVotos)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getMesas = async (req, res) => {
    try {
        const mesas = await MesasModel.findAll({
            where: {
                cargada: '0'
            },
            order: [
                ["num_mesa", "ASC"]
            ]
        })
        res.json(mesas)
    } catch (error) {
        res.json({ message: error.message })
    }
}
export const getMesasCargadas = async (req, res) => {
    try {
        const mesas = await MesasModel.findAll({
            where: {
                cargada: '1'
            },
            order: [
                ["num_mesa", "ASC"]
            ]
        })
        res.json(mesas)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getCertificado = async (req, res) => {
    console.log('Entra en geTCertificado')
    try {
        const certificado = await CertificadoModel.findAll({
            order: [
                ["id", "ASC"]
            ]
        })
        res.json(certificado)
    } catch (error) {
        res.json({ message: error.message })
    }
}
export const getLemas = async (req, res) => {
    try {
        const lemas = await LemasModel.findAll({

            order: [
                ["id", "ASC"]
            ]
        })
        res.json(lemas)
    } catch (error) {
        res.json({ message: error.message })
    }
}
export const getAgrupaciones = async (req, res) => {
    try {
        const agrupaciones = await AgrupacionesModel.findAll({

            order: [
                ["letra", "ASC"]
            ]
        })
        res.json(agrupaciones)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getGobResult = async (req, res) => {
    try {
        const mesas = await GobModel.findAll({
            where: {
                mesa: req.params.mesa
            },
            order: [
                ["id", "ASC"]
            ]
        })
        res.json(mesas)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getIntResult = async (req, res) => {
    try {
        const mesas = await IntModel.findAll({
            where: {
                mesa: req.params.mesa
            },
            order: [
                ["id", "ASC"]
            ]
        })
        res.json(mesas)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getOtrosResult = async (req, res) => {
    try {
        const mesas = await OVRModel.findAll({
            where: {
                mesa: req.params.mesa
            },
            order: [
                ["id", "ASC"]
            ]
        })
        res.json(mesas)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getTotalGobDip = async (req, res) => {
    try {
        const totales = await db.query('SELECT DISTINCT `gobernadores`.`num_partido`, `lemas`.`lema`, SUM(`gobernadores`.`gobernador`) AS gobernador, SUM(`gobernadores`.`diputado`) AS diputado FROM `gobernadores` INNER JOIN `lemas` ON `lemas`.`numero` = `gobernadores`.`num_partido` GROUP BY `num_partido`;',
         {
            model: GobModel,
            mapToModel: false // pass true here if you have any mapped fields
        });
        res.json(totales)
    } catch (error) {
        res.json({ message: error.message })
    }
}
export const getTotalIntConConv = async (req, res) => {
    try {
        const totales = await db.query('SELECT DISTINCT `agrupaciones`.`lema`, `agrupaciones`.`letra`, `agrupaciones`.`sublema_cand`, `agrupaciones`.`candidato`, SUM(`intendentes`.`intendente`) AS intendente, SUM(`intendentes`.`concejal`) AS concejal, SUM(`intendentes`.`convencional`) AS convencional FROM `intendentes` INNER JOIN `agrupaciones` ON `agrupaciones`.`letra` = `intendentes`.`letra` GROUP BY `letra`;',
         {
            model: GobModel,
            mapToModel: false // pass true here if you have any mapped fields
        });
        res.json(totales)
    } catch (error) {
        res.json({ message: error.message })
    }
}
export const getTotalOtrosVotos = async (req, res) => {
    try {
        const totales = await db.query('SELECT DISTINCT `tipoVoto` AS tipo,SUM(`gobernador`) AS gobernador,SUM(`diputado`) AS diputado,SUM(`intendente`) AS intendente,SUM(`concejal`) AS concejal,SUM(`convencional`) AS convencional FROM `otrosvotosres` GROUP BY `tipoVoto`;',
         {
            model: GobModel,
            mapToModel: false // pass true here if you have any mapped fields
        });
        res.json(totales)
    } catch (error) {
        res.json({ message: error.message })
    }
}
export const createGob = async (req, res) => {
    try {
        await GobModel.create(req.body)
        res.json({ "message": 'Registro creado correctamente' })
    } catch (error) {
        res.json({ "message": error.message })
    }
}

export const getTotalMesas = async (req, res) => {
    try {
        const totales = await db.query('SELECT COUNT(*) AS mesas FROM `mesas`;',
         {
            model: MesasModel,
            mapToModel: false // pass true here if you have any mapped fields
        });
        res.json(totales)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getTotalMesasCargadas = async (req, res) => {
    try {
        const totales = await db.query('SELECT COUNT(*) AS cargadas FROM `mesas` WHERE `cargada` = 1;',
         {
            model: MesasModel,
            mapToModel: false // pass true here if you have any mapped fields
        });
        res.json(totales)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const createInt = async (req, res) => {

    try {
        await IntModel.create(req.body)
        res.json({ "message": 'Registro creado correctamente' })

    } catch (error) {
        res.json({ "message": error.message })
    }
}
export const createOtrosVotos = async (req, res) => {

    try {
        await OVRModel.create(req.body)
        res.json({ "message": 'Registro creado correctamente' })

    } catch (error) {
        res.json({ "message": error.message })
    }
}
export const updateGob = async (req, res) => {


    try {
        await GobModel.update(
            req.body,
            {
                where: { mesa: req.params.num, num_partido: req.body.num_partido }
            })
        res.json({ "message": 'Registro creado correctamente' })
    } catch (error) {
        res.json({ "message": error.message })
    }
}

export const updateInt = async (req, res) => {

    try {
        await IntModel.update(
            req.body,
            {
                where: { mesa: req.params.num, letra: req.body.letra }
            })
        res.json({ "message": 'Registro creado correctamente' })

    } catch (error) {
        res.json({ "message": error.message })
    }
}
export const updateOtrosVotos = async (req, res) => {
    console.log(req.body)
    try {
        await OVRModel.update(
            req.body,
            {
                where: { mesa: req.params.num, tipoVoto: req.body.tipoVoto }
            })
        res.json({ "message": 'Registro creado correctamente' })

    } catch (error) {
        res.json({ "message": error.message })
    }
}




export const updateMesa = async (req, res) => {

    try {
        await MesasModel.update(
            {
                cargada: '1'
            },
            {
                where: { num_mesa: req.params.num }
            })
    } catch (error) {
        res.json({ "message": error.message })
    }
}


//  USUARIO
// crear usuario

export const createUsu = async (req, res) => {
    try {

        await UsuarioModel.create(req.body)
        res.json({ "msg": "Usuario creado correctamente", "msgError": "" })

    } catch (err) {

        const errObj = {};
        err.errors.map((e) => {
            errObj['msgError'] = e.message;
            errObj['value'] = e.value;
        })

        res.json({
            "msgError": errObj.msgError,
            "value": errObj.value
        })
    }
}

// login de usuario

export const loginUsu = async (req, res) => {

    try {
        const login = await UsuarioModel.findAll({
            where: {
                usuario: req.params.usuario,
            }
        });

        if (login.length === 0) {
            let respuesta = ({ ...login, error: "No existe el usuario, debe darse de alta", pass: "sin Pass" });
            res.json(respuesta);
        } else {
            console.log('tiene datos')
            console.log(login[0].dataValues)
            res.json(login[0].dataValues)
        }


    } catch (error) {

    }
}

