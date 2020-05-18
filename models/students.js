const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:', {
    define: {
        freezeTableName: true
    }
});

const Student = sequelize.define('Student', {
    student_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    final_grade: {
        type: DataTypes.STRING
    }
}, {
    //other table options
});

console.log(Student === sequelize.models.Student);