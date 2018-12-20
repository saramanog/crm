/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Dish', {
		Id: {
			type: DataTypes.UUIDV4,
			allowNull: false,
			primaryKey: true
		},
		Name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		CategoryId: {
			type: DataTypes.UUIDV4,
			allowNull: false,
			references: {
				model: 'DishCategory',
				key: 'Id'
			}
		}
	}, {
		tableName: 'Dish'
	});
};
