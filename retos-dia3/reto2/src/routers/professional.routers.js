const { Router } = require("express")
const router = Router();
const usersCtrl = require("../controller/professional.controller")

router.get("/", usersCtrl.getStart);

router.get("/professional", usersCtrl.getProfessional);

// router.get("/professional/:id", usersCtrl.getUserParams);

router.post("/professional", usersCtrl.postProfessional);

router.put("/professional", usersCtrl.putProfessional);

router.delete("/professional", usersCtrl.deleteProfessional);

module.exports = router;


