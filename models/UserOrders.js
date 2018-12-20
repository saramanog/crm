/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('UserOrders', {
		OrderId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'Orders',
				key: 'ID'
			}
		},
		RestaurantId: {
			type: DataTypes.UUIDV4,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'Restaurant',
				key: 'Id'
			}
		},
		DishId: {
			type: DataTypes.UUIDV4,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'Dish',
				key: 'Id'
			}
		}
	}, {
		tableName: 'UserOrders'
	});
};
