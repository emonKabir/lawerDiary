"use strict";

module.exports = (sequelize, dataTypes) => {
  const client_t = sequelize.define(
    "client_t",
    {
      name: dataTypes.STRING,
      address: dataTypes.STRING,
      email: dataTypes.STRING,
      phone_number: dataTypes.INTEGER,
      adv_id: dataTypes.INTEGER,
    },
    {
      freezeTableName: true,
      underscored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return client_t;
};
