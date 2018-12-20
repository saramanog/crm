/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Orders', {
		ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		CreatedBy: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'Users',
				key: 'ID'
			}
		},
		IsActive: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: '1'
		},
		CreatedDateTime: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '(getdate())'
		},
		UpdatedDateTime: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'Orders'
	});
};
