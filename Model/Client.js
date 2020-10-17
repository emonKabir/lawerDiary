"use strict";
const db = require("../index");
let Client = function (data) {
  this.data = data;
};

Client.add_client = function (body) {
  return new Promise(async (resolve, reject) => {
    try {
      const add_client = await db.client.create(body);
      resolve(add_client);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

Client.get_client = function (user_id) {
  return new Promise(async (resolve, reject) => {
    try {
      const all_client = await db.client.findAll({
        where: { adv_id: user_id },
      });
      resolve(all_client);
    } catch (error) {
      reject(error);
    }
  });
};

Client.get_single_client_details = function (id) {
  return new Promise(async (resolve, reject) => {
    try {
      const all_case = db.client.findAll({
        where: { id: id },
        include: [
          {
            model: db.case,
            as: "client_case",
            include: [{ model: db.respondent, as: "responder" }],
          },
        ],
      });
      resolve(all_case);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

module.exports = Client;
