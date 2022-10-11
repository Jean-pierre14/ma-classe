const { db, DataTypes } = require('../config/database');

const Students = db.define('students', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    classe: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    sexe: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    emailParents: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    db,
    modelName: 'students'
});

Students.sync();

module.exports = Students;