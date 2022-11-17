const { Router } = require('express');
const router = Router();
const usersCtrl = require('../controller/profesionales.controller');

router.get('/profesionales', usersCtrl.getProfesionales);

// router.get('/profesionales', usersCtrl.getProfesionales);

router.post('/profesionales', usersCtrl.postProfesionales);

router.put('/profesionales', usersCtrl.putProfesional);

router.delete('/profesionales', usersCtrl.deleteProfesional);

module.exports = router;
