"use strict";

module.exports = {
  up: (queryInterface, DataTypes) => {
    queryInterface.createTable("client", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      phone_number: {
        type: DataTypes.INTEGER,
      },
      address: {
        type: DataTypes.TEXT,
      },
      email: {
        type: DataTypes.STRING,
      },
      created_at: {
        type: DataTypes.DATE,
      },
      updated_at: {
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.dropTable("client");
  },
};
