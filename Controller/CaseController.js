const Case = require("../Model/Case");

exports.add_case = async function (req, res) {
  try {
    let new_case = new Case(req.body);
    const result = await new_case.add_case();
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

exports.get_all_case = async function (req, res) {
  try {
    const all_case = await Case.get_all_case(req.params.id);
    res.send(all_case);
  } catch (error) {}
};
