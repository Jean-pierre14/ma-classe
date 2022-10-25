const exp = require('express'),
    router = exp.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/registration', (req, res) => {

    res.render('./Registration/registration');

});

router.get('/eleves', (req, res) => {
    res.render('./Datas/data');
});


module.exports = router;