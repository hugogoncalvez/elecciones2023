import db from "../database/db.js";

import { DataTypes } from "sequelize";

const IntModel = db.define('intendentes', {
    num_esc: { type: DataTypes.STRING },
    mesa: { type: DataTypes.STRING },    
    letra: { type: DataTypes.STRING },    
    intendente: { type: DataTypes.INTEGER },    
    concejal: { type: DataTypes.INTEGER },    
    usuario: { type: DataTypes.STRING },    
})


export default IntModel