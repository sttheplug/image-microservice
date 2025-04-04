const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); // Lägg till body-parser
const app = express();
const imageRoutes = require('./routes/imageRoutes');

// CORS-inställningar
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
}));

// Middleware för större inkommande payloads
app.use(bodyParser.json({ limit: '50mb' })); // JSON med 50 MB gräns
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' })); // URL-encoded med 50 MB gräns
app.use('/uploads', express.static('uploads')); 

// Routes
app.use('/api/images', imageRoutes);

// Felhantering
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Starta servern
const PORT = process.env.PORT || 8086;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
