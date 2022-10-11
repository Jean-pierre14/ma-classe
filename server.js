const exp = require('express'),
    { success, error } = require('consola'),
    dotenv = require('dotenv').config(),
    cors = require('cors'),
    app = exp(),
    db = require('./config/database'),
    PORT = process.env.PORT || 8000;

// DB connection

try {
    db.authenticate();
    console.log('Connected')
} catch (err) {
    error({ message: `Error connection DB ${err.message}`, badge: true })
}

// Cors config

app.use(cors());

// Getting the /
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my RestFull APIs' })
});

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