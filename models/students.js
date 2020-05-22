module.exports = function(sequelize, DataTypes) {

    const Student = sequelize.define('Student', {
        student_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
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
    });

    Student.associate = function(models) {
        Student.hasMany(models.Grade, {
            onDelete: "CASCADE"
        });
        Student.hasMany(models.Assignment, {
            onDelete: "CASCADE"
        });
    };

    return Student;
}
