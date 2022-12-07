import db from "../database/db.js";

import { DataTypes } from "sequelize";

const GobModel = db.define('gobernadores', {
    num_esc: { type: DataTypes.STRING },
    mesa: { type: DataTypes.STRING },    
    num_partido: { type: DataTypes.STRING },    
    gobernador: { type: DataTypes.INTEGER },    
    diputado: { type: DataTypes.INTEGER },    
    usuario: { type: DataTypes.STRING },    
})


export default GobModel