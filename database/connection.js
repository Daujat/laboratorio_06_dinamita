// connection.js

const mongoose = require('mongoose');

// Configuración de la conexión a MongoDB
const mongoDB = 'mongodb://mongo:TuwFvwJkvBoJOIrPPUPkSlYpOUYxSGop@viaduct.proxy.rlwy.net:25421';

// Función asíncrona para manejar la conexión
async function connectDB() {
 try {
    await mongoose.connect(mongoDB);
    console.log('Conexión a MongoDB establecida con éxito');
 } catch (err) {
    console.error('Error al conectar a MongoDB:', err);
 }
}

// Llamada a la función asíncrona para iniciar la conexión
connectDB().catch(err => console.error(err));

// Exportar la conexión para su uso en otros archivos
module.exports = mongoose.connection;
