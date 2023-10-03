const jwt = require("jsonwebtoken");

const middlewareController = {
  verifyToken: (req, res, next) => {
    const token = req.headers.token;

    if (token) {
      const accessToken = token.split(" ")[1];
      jwt.verify(accessToken, process.env.SECRET_KEY, (err, user) => {
        if (err) {
          return res.status(403).json("Token không khả dụng");
        }
        req.user = user;
        next();
      });
    } else {
      return res.status(404).json("Bạn chưa đăng nhập!");
    }
  },
};

module.exports = middlewareController;
