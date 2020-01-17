const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')
require('dotenv').config()

const app = express();
console.log('Hello')

mongoose.connect(process.env.MONGODB_CONN, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json())
app.use(routes)
// Métodos HTTP: get, post, put, delete
// Tipos de parâmetros:
// Query Params: req.query (Filtros, ordenação, paginação, ...)
// Route Params: req.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para a criação ou alteração de um registro)

// MongoDB (Não-relacional)

app.listen(3333);