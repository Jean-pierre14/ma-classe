// DB connection
const db = require('../config/database'),
    Op = require('sequelize'),
    Students = require('../models/Students');

/**
 * 
 * @param {Null} req 
 * @param {getting students} res 
 */

const getStudents = async(req, res) => {
    const AllStudents = await Students.findAll();
    res.json(AllStudents);
}

/**
 * Searching student endpoint
 * @param {localhost:7000/students/search} req 
 * @param {get method} res
 * 
 */

const searchStudent = async(req, res) => {
    let searchText = req.body.txt;
    const searchData = await Students.findAll({ where: { firstName: searchText } })

    res.json(searchData)
}

const getStudent = async(req, res) => {

    let Id = req.params.id;

    const student = await Students.findOne({ where: { id: Id } });

    res.render('edit', { student })

}

const postStudent = async(req, res) => {

    const {
        firstName,
        name,
        sexe,
        classe,
        emailParents
    } = req.body

    // console.log(req.body);
    let errors = []

    if (firstName === '' || firstName === undefined || name === '' || name === undefined || sexe === '' || sexe === undefined || classe === undefined || classe === '') {

        errors.push({ msg: 'Field in all inputs fields' })


    } else {
        const SaveStudent = Students.build({
            firstName,
            name,
            sexe,
            classe,
            emailParents
        });

        await SaveStudent.save();

        res.redirect('/eleves');
    }

}



const updateStudent = (req, res) => {

    res.send('Update Student');

}

const deleteStudent = (req, res) => {
    res.send('Delete sTudent');
}

const deleteAllStudents = (req, res) => {
    res.send('Delete All stiudents')
}

module.exports = {
    getStudents,
    getStudent,
    searchStudent,
    postStudent,
    updateStudent,
    deleteStudent,
    deleteAllStudents
}