const getStudents = (req, res) => {
    res.send('Students');
}

const getStudent = (req, res) => {
    res.send('Student');
}

const postStudent = (req, res) => {
    res.send('Post Student');
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