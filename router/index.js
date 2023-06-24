const Router = require('express').Router;
const express = require('express')

const userController = require('../controllers/user-controller');
const predmetController = require('../controllers/predmet-controller');
const themaController = require('../controllers/thema-controller');
const authMiddleware = require('../middlewares/auth-middleware');
const {body} = require('express-validator');
const router = new Router();

router.use('/uploads', express.static('uploads'));

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 32}),
    userController.registration
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);

router.get('/informatic', predmetController.getInformaticPredmet);
router.get('/maths', predmetController.getMathsPredmet);
router.get('/physics', predmetController.getPhysicsPredmet);
router.get('/predmets', predmetController.getPhysicsPredmet);

router.get('/informatic/:thema', themaController.getPhysicThema );
router.get('/maths/:thema', themaController.getInformaticThema );
router.get('/physics/:thema', themaController.getMathsThema );

module.exports = router
