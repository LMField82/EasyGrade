module.exports = function(sequelize, DataTypes) {

    const Student = sequelize.define('Student', {

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
    };

    return Student;
}
