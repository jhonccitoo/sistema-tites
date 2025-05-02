// src/database.js
const mongoose = require('mongoose');
require('dotenv').config(); // Carga .env si es necesario aquí

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB database connection established successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// No necesitas exportar nada si solo quieres ejecutar la conexión.