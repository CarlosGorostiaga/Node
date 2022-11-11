const { Router } = require('express');
const router = Router();
const usersCtrl = require('../controller/profesional.controller');

router.get('/profesional', usersCtrl.getprofesional);

router.get('/profesionales', usersCtrl.getProfesionales);

router.post('/profesional', usersCtrl.postProfesional);

router.put('/profesional', usersCtrl.putProfesional);

router.delete('/profesional', usersCtrl.deleteProfesional);

module.exports = router;
