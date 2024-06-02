const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
//Table is being created with this part of the script once the environment runs. 
//if there is an error with a data type drop table may be needed if data is not present in the table
const User = sequelize.define('user', {
    // Colum definitions
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.STRING
    }
});

module.exports = User;