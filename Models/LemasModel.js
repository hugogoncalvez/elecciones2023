import db from "../database/db.js";

import { DataTypes } from "sequelize";

const LemasModel = db.define('lemas', {
    numero: { type: DataTypes.STRING },
    lema: { type: DataTypes.STRING }    
})


export default LemasModel
