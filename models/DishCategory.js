/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('DishCategory', {
		Id: {
			type: DataTypes.UUIDV4,
			allowNull: false,
			primaryKey: true
		},
		Name: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'DishCategory'
	});
};
