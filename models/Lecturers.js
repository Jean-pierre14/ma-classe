const { db, DataTypes } = require('../config/database'),
    Lectures = new db.define('Lecturers', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            required: true
        },
        username: {
            type: DataTypes.STRING,
            required: true
        },
        anneeDarriver: {
            type: DataTypes.STRING,
            required: true
        },
        status: {
            type: DataTypes.INTEGER,
            required: true
        },
        sexe: {
            type: DataTypes.STRING,
            required: true
        },
        phones: {

            type: DataTypes.STRING,
            required: true
        },
        email: {
            type: DataTypes.STRING,
            required: true,
            allowNull: true
        },
        nationality: {
            type: DataTypes.STRING,
            required: true
        },
        titulaireDe: {
            type: DataTypes.STRING,
            required: true
        },
    }, {
        db,
        modelName: 'Lecturers'
    })

Lectures.sync();

module.exports = Lectures;