import db from "../database/db.js";

import { DataTypes } from "sequelize";

const OtrosVotosModel = db.define('otrosvotos', {
    tipoVoto: { type: DataTypes.STRING },
    gobernador: { type: DataTypes.STRING },    
    diputados: { type: DataTypes.STRING },    
    intendente: { type: DataTypes.STRING },    
    concejal: { type: DataTypes.STRING },   
    convencional: { type: DataTypes.STRING }   
})


export default OtrosVotosModel