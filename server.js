const exp = require('express'),
    { success, error } = require('consola'),
    dotenv = require('dotenv'),
    app = exp(),
    PORT = process.env.PORT || 7000

// Getting the /
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my RestFull APIs' })
});

// Server Settings
app.listen(PORT, (err) => {
    if (err) error({ message: `Error ${err.message}`, badge: true })
    success({ message: `Server is running on Port ${PORT}`, badge: true })
})