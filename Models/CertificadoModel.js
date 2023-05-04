import db from "../database/db.js";

import { DataTypes } from "sequelize";

const CertificadoModel = db.define('certificados', {
    lema: { type: DataTypes.STRING },
    numero: { type: DataTypes.STRING },
    letra: { type: DataTypes.STRING },
    sublema_cand: { type: DataTypes.STRING },
    gobernador: { type: DataTypes.INTEGER },
    diputado: { type: DataTypes.INTEGER },
    intendente: { type: DataTypes.INTEGER },
    concejal: { type: DataTypes.INTEGER },
    convencional: { type: DataTypes.INTEGER }
})


export default CertificadoModel
