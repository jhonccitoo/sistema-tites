const userCtrl = {};

const User = require("../models/User");

userCtrl.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

userCtrl.createUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).json("User Created");
  } catch (error) {
    if (error.code === 11000) {
      // Error de clave duplicada
      return res
        .status(400)
        .json({ message: "El nombre de usuario ya existe" });
    }
    console.error("Error al crear usuario:", error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

userCtrl.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);

  res.json("User Deleted");
};

module.exports = userCtrl;
