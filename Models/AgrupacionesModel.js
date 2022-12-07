import db from "../database/db.js";

import { DataTypes } from "sequelize";

const AgrupacionesModel = db.define('agrupaciones', {
    letra: { type: DataTypes.STRING },
    sublema_cand: { type: DataTypes.STRING }    
})


export default AgrupacionesModel