"use strict";

module.exports = (sequelize, dataTypes) => {
  const user_t = sequelize.define(
    "user_t",
    {
      first_name: dataTypes.STRING,
      last_name: dataTypes.STRING,
      email: dataTypes.STRING,
      phone_number: dataTypes.INTEGER,
      password: dataTypes.STRING,
    },
    {
      freezeTableName: true,
      underscored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return user_t;
};
