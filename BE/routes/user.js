const router = require("express").Router();
const middlewareController = require("../controllers/middlewareController");
const userController = require("../controllers/userController");

router.get("/", middlewareController.verifyToken, userController.getAllUser);
router.get("/:id", userController.getOneUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
