const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Ajusta la ruta a tu modelo
const bcrypt = require('bcrypt'); // Importa bcrypt

// Ruta para CREAR un nuevo usuario
router.post('/', async (req, res) => {
    // ... (código de creación de usuario) ...
});

// Ruta para OBTENER todos los usuarios
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: 'Server error fetching users.' });
    }
});

module.exports = router;