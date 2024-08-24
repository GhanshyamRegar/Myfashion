const express = require('express');
const router = express.Router();
const {home, signup, login , contact, updateuser,getUserData,getUsers,deleteuser,getadminmsg,getcontactquery,postnotification} = require("../controllers/auth-controller");



router.route("/").get(home);
router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/contact").post(contact);


router.route("/users/:id").get(getUserData);
router.delete("/users/:id",deleteuser);
router.put("/users/:id",updateuser);


router.route("/users").get(getUsers);

router.route("/getcontactquery").get(getcontactquery);

router.post("/users/notify",postnotification)
router.get("/users/notify/:id",getadminmsg)

module.exports = router;