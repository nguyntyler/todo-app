"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Todos", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			task: {
				type: Sequelize.STRING,
			},
			isCompleted: {
				type: Sequelize.BOOLEAN,
			},
			userID: {
				type: Sequelize.INTEGER,
			},
			createdAt: {
				allowNull: true,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: true,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Todos");
	},
};
