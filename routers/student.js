const {
    getStudents,
    postStudent,
    getStudent,
    updateStudent,
    deleteStudent,
    deleteAllStudents
} = require('../controllers/StudentControllers');

const exp = require('express'),
    router = exp.Router();


router.route('/').get(getStudents).post(postStudent).delete(deleteAllStudents);

router.route('/:id').get(getStudent).put(updateStudent).delete(deleteStudent);

module.exports = router;