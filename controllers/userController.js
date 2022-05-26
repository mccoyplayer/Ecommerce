import userModel from "../models/userModel.js";

export const getAllUser = async (req, res) => {
  const role = "user";
  const users = await userModel.find({ role }).select("-password");

  if (!users) {
    return res.status(404).json({
      msg: "no user found",
    });
  }
  res.status(200).json({
    users,
  });
};

export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const user = await userModel.findOne({
    _id: id,
  }).select('-password');
  
  if (!user) {
    res.status(404).json({
      msg: "no user found",
    });
  }
  res.status(200).json({
    user
  });

};

export const showCurrentUser = async (req, res) => {
  res.status(200).json({
    user:req.user
  });
};

export const updateUser = async (req, res) => {
  res.send("update user is here!");
};

export const updateUserPassword = async (req, res) => {
  res.send("update user password is here!");
};
