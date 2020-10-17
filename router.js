"use strict";
const router = require("express").Router();
const cors = require("cors");
router.use(cors());
const db = require("./index");
const caseController = require("./Controller/CaseController");
const userController = require("./Controller/UserController");
const clientController = require("./Controller/ClientController");

//User router
router.post("/registration", userController.registration);
router.post("/login", userController.login);

//case router
router.post("/add_case", caseController.add_case);
router.get("/get_all_case/:id", caseController.get_all_case);

//client router
router.get("/get_all_client", clientController.get_client);
router.post("/add_client", clientController.add_client);
router.get(
  "/single_client_details/:id",
  clientController.get_single_client_details
);
module.exports = router;
