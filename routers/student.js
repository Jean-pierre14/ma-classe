const {
    getStudents,
    postStudent,
    getStudent,
    updateStudent,
    deleteStudent,
    deleteAllStudents,
    searchStudent
} = require('../controllers/StudentControllers');

const exp = require('express'),
    router = exp.Router();


router.route('/').get(getStudents).post(postStudent).delete(deleteAllStudents);

router.route('/:id').get(getStudent).put(updateStudent).delete(deleteStudent);

/**
 * Search Event
 */

router.route('/:search').get(searchStudent)

module.exports = router;