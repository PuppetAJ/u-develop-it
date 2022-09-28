const express = require('express');
const PORT = process.env.PORT || 3001;
const apiRoutes = require('./routes/apiRoutes');
const inputCheck = require('./utils/inputCheck');
const app = express();
const db = require('./db/connection');

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use('/api', apiRoutes);

// Default response if not found
app.use((req, res) => {
    res.status(404).end();
});

// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World!'
//     });
// });

db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        console.log(`URL: http://localhost:${PORT}`);
    });
});