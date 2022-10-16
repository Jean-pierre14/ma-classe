const exp = require('express'),
    { success, error } = require('consola'),
    dotenv = require('dotenv').config(),
    session = require('express-session'),
    flash = require('connect-flash'),
    cors = require('cors'),
    app = exp(),
    { db, DataTypes } = require('./config/database'),
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

// Server Settings
app.listen(PORT, (err) => {
    if (err) error({ message: `Error ${err.message}`, badge: true })
    success({ message: `Server is running on Port ${PORT}`, badge: true })
})