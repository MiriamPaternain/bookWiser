const mongoose = require('mongoose');

const dbConnect = () => {
  const uri = process.env.MONGO_CONNECTION;

  mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('conectado a MongoDB'))
    .catch((e) => console.log('error de conexion', e));
};

module.exports = { dbConnect };
