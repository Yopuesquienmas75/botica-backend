const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  codigo: String,
  nombre: String,
  lote: String,
  vencimiento: String,
  stock: Number,
  precio: Number
});

module.exports = mongoose.model('Producto', productoSchema);
