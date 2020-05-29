module.exports = function(sequelize, DataTypes) {

    const Grade = sequelize.define('Grade', {
 
        grade: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    Grade.associate = function(models) {
        Grade.belongsTo(models.Student, {
            foreignKey: {
                allowNull: true
            }
        });

        Grade.belongsTo(models.Assignment, {
            foreignKey: {
                allowNull: true
            }
        });
    };


    return Grade;
}
