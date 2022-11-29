import db from "../database/db.js";

import { DataTypes } from "sequelize";

const MesasModel = db.define('mesas', {
    num_mesa: { type: DataTypes.STRING },
    num_esc: { type: DataTypes.STRING },
    cargada:{ type: DataTypes.STRING }
})


export default MesasModel