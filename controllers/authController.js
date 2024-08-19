const dbConnect = require("../connectionDb");
const User = require("../model/user.model");

exports.createUser = async (req, res) => {
  await dbConnect();
  const user = await User.create(req.body);
  res.send(user);
};

exports.updateUser = async (req, res) => {
  await dbConnect();
  const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  });
  res.send(user);
};

exports.getUser = async (req, res) => {
  await dbConnect();
  const user = await User.find({ _id: req.params.id });
  res.send(user);
};
