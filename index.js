const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./models');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Configura o motor de visualização para Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para parsear os corpos das requisições
app.use(bodyParser.urlencoded({ extended: false }));

// Rotas
app.use('/', userRoutes);

// Sincroniza o banco de dados e inicia o servidor
db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
});
