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
        grade: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        final_grade: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            defaultValue: null
        }
    });

    Grade.associate = function(models) {
        Grade.belongsTo(models.Student, {
            foreignKey: {
                allowNull: false
            }
        });
    };


    return Grade;
}
