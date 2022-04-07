const express = require('express');
const { signup, signin} = require('../../controller/admin/auth');
const { isRequestValidate, validateSigninRequest ,validateSignupRequest} = require('../../validators/auth');
const router = express.Router();


router.post('/admin/signup',validateSignupRequest,isRequestValidate, signup);

router.post('/admin/signin',validateSigninRequest,isRequestValidate, signin);



module.exports = router;