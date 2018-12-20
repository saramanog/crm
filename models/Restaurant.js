/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Restaurant', {
		Id: {
			type: DataTypes.UUIDV4,
			allowNull: false,
			primaryKey: true
		},
		Name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Address: {
			type: DataTypes.STRING,
			allowNull: true
		},
		City: {
			type: DataTypes.STRING,
			allowNull: true
		},
		State: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Country: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Restaurant'
	});
};
