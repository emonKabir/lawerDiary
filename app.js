const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", require("./router"));
const db = require("./index");
db.sequelize.sync();
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
