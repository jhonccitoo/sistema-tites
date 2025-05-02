const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Asegura que los nombres de usuario sean únicos
    trim: true // Quita espacios al inicio/final
},
password: {
    type: String,
    required: true
}
// Puedes añadir otros campos como email, name, createdAt, etc.
}, {
timestamps: true // Añade createdAt y updatedAt automáticamente
});

userSchema.pre('save', async function(next) {
  // Solo hashea la contraseña si ha sido modificada (o es nueva)
  if (!this.isModified('password')) return next();

  try {
      // Genera un 'salt' y hashea la contraseña
      const salt = await bcrypt.genSalt(10); // 10 es un buen valor por defecto para las rondas
      this.password = await bcrypt.hash(this.password, salt);
      next();
  } catch (error) {
      next(error); // Pasa el error al siguiente middleware/manejador
  }
});

userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = model("User", userSchema);
