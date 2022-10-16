// DB connection
const db = require('../config/database'),
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

const getStudent = async(req, res) => {

    let Id = req.params.id;

    const student = await Students.findOne({ where: { id: Id } });

    res.json(student);

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

    if (firstName === '' || firstName === undefined || name === '' || name === undefined || sexe === '' || sexe === undefined || classe === undefined || classe === '') {

        res.status(500).json('Field in all inputs')

    } else {

        let email = emailParents;

        const SaveStudent = Students.build({
            firstName,
            name,
            sexe,
            classe,
            email
        });

        await SaveStudent.save()
    }

    res.redirect('/eleves');

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
    postStudent,
    updateStudent,
    deleteStudent,
    deleteAllStudents
}