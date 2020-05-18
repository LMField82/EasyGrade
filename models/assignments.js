const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Assignment = sequelize.define('Assignment', {
    assignment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    standard: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    //other table options
});

console.log(Assignment === sequelize.models.Assignment);