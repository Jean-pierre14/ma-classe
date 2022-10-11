const db = require('../config/database');

const Students = db.define('students', {
    id: {
        type: DataType.INTERGE,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: DataType.STRING,
        allowNull: false,
        required: true
    },
    name: {
        type: DataType.STRING,
        allowNull: false,
        required: true
    },
    classe: {
        type: DataType.STRING,
        allowNull: false,
        required: true
    },
    sexe: {
        type: DataType.STRING,
        allowNull: false,
        required: true
    },
    emailParents: {
        type: DataType.STRING,
        allowNull: true,
    }
});

Students.sync();

module.exports = Students;