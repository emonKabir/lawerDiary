"use strict";

module.exports = (sequelize, dataTypes) => {
  const respondent_t = sequelize.define(
    "respondent_t",
    {
      name: dataTypes.STRING,
      address: dataTypes.STRING,
      email: dataTypes.STRING,
      phone_number: dataTypes.INTEGER,
    },
    {
      freezeTableName: true,
      underscored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return respondent_t;
};
