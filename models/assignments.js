module.exports = function(sequelize, DataTypes) {

    const Assignment = sequelize.define('Assignment', {
        standard: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Assignment.associate = function(models) {
        Assignment.hasMany(models.Grade, {
             onDelete: "CASCADE"
        });
           

    };
    return Assignment;
}
