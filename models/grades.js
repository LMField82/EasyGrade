module.exports = function(sequelize, DataTypes) {

    const Grade = sequelize.define('Grade', {
        student_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        assignment_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }, 
        standard: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        final_grade: {
            type: DataTypes.STRING,
            primaryKey: true
        }
    });
    return Grade;
}
