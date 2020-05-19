module.exports = function(sequelize, DataTypes) {

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
    });
    return Assignment;
}