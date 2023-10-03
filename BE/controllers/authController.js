const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const createToken = require("../utils/createToken");
const authController = {
  registerUser: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);
      //Create user
      const newUser = await new User({
        email: req.body.email,
        password: hashed,
        phoneNumber: req.body.phoneNumber,
        name: req.body.name,
        gender: req.body.gender,
      });
      const user = await newUser.save();
      return res.status(200).json("Đăng ký tài khoản thành công");
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  loginUser: async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(404).json("Email không tồn tại!");
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        return res.status(404).json("Mật khẩu không đúng!");
      }
      if (user && validPassword) {
        const token = createToken(user);
        const accessToken = (await token).accessToken;
        const refreshToken = (await token).refreshToken;

        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          secure: false,
          path: "/",
          sameSite: "strict",
        });
        const { password, ...others } = user._doc;
        return res.status(200).json({ ...others, accessToken });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  refreshToken: async (req, res) => {
    const refreshToken = req.cookie.refreshToken;
    if (!refreshToken) {
      return res.status(401).json("Bạn chưa đăng nhập!");
    }
    jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN, (err, user) => {
      if (err) {
        console.log(err);
      }
      const newToken = createToken(user);
      const newAccessToken = newToken.accessToken;
      const newRefreshToken = newToken.refreshToken;
      res.cookies("refreshToken", newRefreshToken, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        path: "/",
      });
      return res.status(200).json({ accessToken: newAccessToken });
    });
  },
  logout: async (req, res) => {
    res.clearCookie("refreshToken");
    return res.status(200).json("Logged out successfully!");
  },
};

module.exports = authController;
