import db from "../database/db.js";

import { DataTypes } from "sequelize";

const OVRModel = db.define('otrosvotosres', {
    num_esc: { type: DataTypes.STRING },
    mesa: { type: DataTypes.STRING },    
    tipoVoto: { type: DataTypes.INTEGER },     
    gobernador: { type: DataTypes.INTEGER },     
    diputado: { type: DataTypes.INTEGER },     
    intendente: { type: DataTypes.INTEGER },     
    concejal: { type: DataTypes.INTEGER },     
    convencional: { type: DataTypes.INTEGER },   
    usuario: { type: DataTypes.STRING }    
})


export default OVRModel