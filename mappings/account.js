
const express = require("express");
const database = require("../data");

let router = express.Router();

//  To get all the users.
router.get("/account/all", (request, response) => {
  let accounts = database.get_all_accounts();
  response.status(200).send(accounts);
});

module.exports = { router };
