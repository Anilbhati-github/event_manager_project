import Sequelize from "sequelize";
import sequelize from "../db/db.js";


export default sequelize.define('event', {
        name: {
            allowNULL: false,
            type: Sequelize.STRING
        },
        place: {
            allowNULL: false,
            type: Sequelize.STRING
        },
        event_time: {
            allowNULL: false,
            type: Sequelize.STRING
        },
        createdAt: {
            field: "created_at",
            type: Sequelize.DATE
        },
        updatedAt: {
            field: "updated_at",
            type: Sequelize.DATE
        }
    }, {
        tableName: 'event'
    }
)

// module.exports = event;

