const exp = require('express'),
    router = exp.Router();

router.get('/', (req, res) => {
    res.render('index')
})
module.exports = router;