const { render } = require('ejs');

const exp = require('express'),
    { success, error } = require('consola'),
    dotenv = require('dotenv').config(),
    session = require('express-session'),
    flash = require('connect-flash'),
    cors = require('cors'),
    app = exp(),
    { db, DataTypes, Op } = require('./config/database'),
    Students = require('./models/Students'),
    PORT = process.env.PORT || 8000;

// DB connection

try {
    db.authenticate();
    success({ message: `Connected to the DB`, badge: true })
} catch (err) {
    error({ message: `Error connection DB ${err.message}`, badge: true })
}

// Express-session config
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: ''
}))

// Cors config

app.use(cors());

// Flash message

app.use(flash());

app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    res.locals.error = req.flash('error')
    next()
})

// Views engine ejs
app.set('view engine', 'ejs');

// Body-parser 
app.use(exp.urlencoded({ extended: false }));


/**
 * The Views endpoint
 * 
 */

app.use('/', require('./routers/viewsRouter'));

/**
 * Student APIs
 * CRUD functions
 */

app.use('/students', require('./routers/student'));

// Search
app.get('/search', async(req, res) => {

    let { search } = req.query



    let txt = search.trim


    if (txt != '' || txt != 'undefined') {
        const optionSearch = {
            [Op.like]: `%${txt}%`
        }
        await Students.findAll({
                where: {
                    [Op.or]: {
                        firstName: optionSearch,
                        name: optionSearch
                    }
                }
            })
            .then(data => {
                res.render('index', { data })
            })
            .catch(e => {
                let error = 'There is a problem';

                res.render('index', { error })

                console.log(e)

            })
    } else {
        res.render('index')
    }

})

// Server Settings
app.listen(PORT, (err) => {
    if (err) error({ message: `Error ${err.message}`, badge: true })
    success({ message: `Server is running on Port ${PORT}`, badge: true })
})