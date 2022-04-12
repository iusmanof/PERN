const Router = require("express");
const userController = require("../controllers/userController");
const router = new Router();
const UserController = require("../controllers/userController");
const AuthMiddleware = require("../middleware/AuthMiddleware");

router.post("/registration", UserController.registration);
router.post("/login", UserController.login);
router.get("/auth", AuthMiddleware, userController.check);

module.exports = router;
