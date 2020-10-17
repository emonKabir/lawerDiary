"use strict";
const validator = require("validator");
const bcrypt = require("bcryptjs");
const db = require("../index");

let User = function (data) {
  this.data = data;
  this.errors = [];
};

User.prototype.validation = function () {
  if (this.data.phone_number.length != 11) {
    this.errors.push(" Please provide a valid number");
  }
  if (!validator.isEmail(this.data.email)) {
    this.errors.push("Please provide a valid email");
  }
};

User.prototype.registration = function () {
  return new Promise(async (resolve, reject) => {
    //validating form

    try {
      // this.cleanUp()
      this.validation();
      if (!this.errors.length) {
        let salt = bcrypt.genSaltSync(10);
        this.data.password = bcrypt.hashSync(this.data.password, salt);
        const [userDetails, created] = await db.user.findOrCreate({
          where: { phone_number: this.data.phone_number },
          defaults: this.data,
        });
        if (created) {
          resolve(userDetails);
        } else {
          reject("User Already exits!");
        }
      } else {
        reject(this.errors);
      }
    } catch (error) {
      console.log("registration error------------ " + error);
    }
  });
};

User.prototype.login = function () {
  return new Promise((resolve, reject) => {
    db.user
      .findOne({ where: { phone_number: this.data.phone_number } })
      .then((currentUser) => {
        if (
          currentUser &&
          bcrypt.compareSync(this.data.password, currentUser.password)
        ) {
          // this.data = currentUser;
          console.log(currentUser);
          resolve(currentUser);
        } else {
          reject("Invalid Username or Password");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

module.exports = User;
