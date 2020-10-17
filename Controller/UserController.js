"use strict";

const db = require("../index");
const User = require("../Model/User");

exports.registration = async function (req, res) {
  try {
    let user = new User(req.body);
    const result = await user.registration();
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

exports.login = async function (req, res) {
  try {
    let user = new User(req.body);
    const result = await user.login();
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
