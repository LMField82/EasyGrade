const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Grade = sequelize.define('Grade', {
    assignment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    }, 
    standard: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    //other table options
});

console.log(Grade === sequelize.models.Grade);