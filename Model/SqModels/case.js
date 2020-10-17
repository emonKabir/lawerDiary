"use strict";

module.exports = (sequelize, dataTypes) => {
  const case_t = sequelize.define(
    "case_t",
    {
      case_title: dataTypes.STRING,
      case_type: dataTypes.STRING,
      case_number: dataTypes.INTEGER,
      case_status: dataTypes.STRING,
      case_fees: dataTypes.INTEGER,
      case_description: dataTypes.TEXT,
      oponent_name: dataTypes.STRING,
      oponent_contact_number: dataTypes.INTEGER,
      oponent_adv_name: dataTypes.STRING,
      oponent_adv_contact_number: dataTypes.INTEGER,
      court_name: dataTypes.STRING,
      court_city: dataTypes.STRING,
      judge_name: dataTypes.STRING,
      client_id: dataTypes.INTEGER,
      respondent_id: dataTypes.INTEGER,
      user_id: dataTypes.INTEGER,
    },
    {
      freezeTableName: true,
      underscored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return case_t;
};
