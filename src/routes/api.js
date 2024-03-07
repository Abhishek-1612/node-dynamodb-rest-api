const express = require('express');
const router = new express.Router();
const UserController = require('../modules/user/controller/user.controller');

router.get(`/users/:UserID`, UserController.findByID);
router.post(`/users`, UserController.create);
router.patch(`/users/:UserID`, UserController.update);
router.delete(`/users/:UserID`, UserController.deleteByID);

module.exports = router;
