const db = require("../index");

let Case = function (data) {
  this.data = data;
  this.error = [];
};
Case.prototype.rearrange_data = function () {
  let respondent = JSON.parse(this.data.respondent);
  let client = JSON.parse(this.data.client);
  console.log("--------------------- respondent " + JSON.stringify(respondent));
  this.data = {
    responder: {
      name: respondent.name,
      email: respondent.email,
      phone_number: respondent.phone_number,
      address: respondent.address,
    },
    client: {
      name: client.name,
      email: client.email,
      phone_number: client.phone_number,
      address: client.address,
    },
    case_title: this.data.case_title,
    case_type: this.data.casetype,
    case_number: this.data.case_number,
    case_status: this.data.case_status,
    case_fees: this.data.case_fees,
    case_description: this.data.case_description,
    oponent_name: this.data.oponent_name,
    oponent_contact_number: this.data.oponent_contact_number,
    oponent_adv_name: this.data.oponent_adv_name,
    oponent_adv_contact_number: this.data.oponent_adv_contact_number,
    court_name: this.data.court_name,
    court_city: this.data.court_city,
    judge_name: this.data.judge_name,
  };

  console.log("-========================= data " + JSON.stringify(this.data));
};
Case.prototype.add_case = function () {
  return new Promise((resolve, reject) => {
    this.rearrange_data();
    db.case
      .create(this.data, {
        include: [
          { model: db.respondent, as: "responder" },
          { model: db.client, as: "client" },
        ],
      })
      .then((data) => {
        console.log(JSON.stringify("----------------------- " + data));
        resolve(data);
      })
      .catch((err) => {
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa " + err);
        resolve(err);
      });
  });
};

Case.get_all_case = function (id) {
  return new Promise(async (resolve, reject) => {
    try {
      const all_case = db.case.findAll({
        where: { user_id: id },
        include: [
          { model: db.respondent, as: "responder" },
          { model: db.client, as: "client" },
        ],
      });
      resolve(all_case);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
module.exports = Case;
