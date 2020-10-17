"use strict";
const Client = require("../Model/Client");

exports.add_client = async function (req, res) {
  const result = await Client.add_client(req.body);
  res.send(result);
};

exports.get_client = async function (req, res) {
  try {
    const result = await Client.get_client(req.query.user_id);
    res.status(200).json(result);
  } catch (error) {
    res.json("error : " + error);
  }
};
exports.get_single_client_details = async function (req, res) {
  try {
    const result = await Client.get_single_client_details(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.json(error);
  }
};
