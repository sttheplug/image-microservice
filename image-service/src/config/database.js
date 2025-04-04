const { Sequelize } = require('sequelize');
const Image = require('../models/image');


const sequelize = new Sequelize('journalsystem_microservices_db', 'root', 'Aprilapril23.', {
    host: 'localhost',
    dialect: 'mysql',
});

sequelize.sync({ alter: true })
    .then(() => console.log('Database synchronized'))
    .catch((error) => console.error('Error synchronizing the database:', error));

module.exports = sequelize;
