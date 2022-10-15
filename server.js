const exp = require('express'),
    { success, error } = require('consola'),
    dotenv = require('dotenv').config(),
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

// Cors config

app.use(cors());

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