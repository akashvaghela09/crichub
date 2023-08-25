const { undefinedFilter } = require("../utils/utils");

const getAllUsers = async (req, res) => {
  res.json({ data: "Got All Users!" });
  return;
};

const getSingeUser = async (req, res) => {
  let id = req.params.id;

  res.json({ data: `Got This user => ${id}` });
  return;
};

const addUser = async (req, res) => {
  const { email, name = "" } = req.body;

  res.status(201).json({ message: "addUser Success" });
  return;
};

const updateUser = async (req, res) => {
  let userId = req.params.id;

  res.status(201).json({ message: "updateUser Success" });
  return;
};

const deleteUser = async (req, res) => {
  let userId = req.params.id;
  
    res.status(201).json({ message: "deleteUser Deleted!" });
};

module.exports = {
  getAllUsers,
  getSingeUser,
  addUser,
  updateUser,
  deleteUser,
};
