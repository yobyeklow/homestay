const User = require("../model/user");

const userController = {
  getAllUser: async (req, res) => {
    try {
      const user = await User.find();
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  getOneUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json("Người dùng không ton tai");
      }
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
        return res.status(404).json("Người dùng không ton tai");
      }
      return res.status(200).json("Xoá người dùng thành công");
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

module.exports = userController;
