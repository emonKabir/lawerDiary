const dbConfig = require("./Config/config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.client = require("./Model/SqModels/client")(sequelize, Sequelize);
db.case = require("./Model/SqModels/case")(sequelize, Sequelize);
db.respondent = require("./Model/SqModels/respondent")(sequelize, Sequelize);
db.user = require("./Model/SqModels/user")(sequelize, Sequelize);

db.respondent.hasMany(db.case, { foreignKey: "respondent_id", as: "case" });
db.case.belongsTo(db.respondent, {
  foreignKey: "respondent_id",
  as: "responder",
});
db.client.hasMany(db.case, { foreignKey: "client_id", as: "client_case" });
db.case.belongsTo(db.client, { foreignKey: "client_id", as: "client" });

db.user.hasMany(db.case, { foreignKey: "user_id", as: "user_case" });
db.case.belongsTo(db.user, { foreignKey: "user_id", as: "user" });

db.user.hasMany(db.client, { foreignKey: "adv_id", as: "users_client" });
db.client.belongsTo(db.user, { foreignKey: "adv_id", as: "client_adv" });
module.exports = db;
