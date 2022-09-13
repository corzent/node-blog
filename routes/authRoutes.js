const express = require('express');
const router = express.Router();

const { registerValidation, loginValidation } = require('../validations');
const { checkAuth, handleValidationErrors } = require('../utils/index');
const { userController } = require('../controllers/index');

router.post('/login', loginValidation, handleValidationErrors, userController.login);
router.post('/register', registerValidation, handleValidationErrors, userController.register);
router.get('/me', checkAuth, userController.getMe);

module.exports = router;
