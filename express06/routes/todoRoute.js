const fs = require('fs/promises')
const express = require('express')
const todoController = require('../controllers/todoController')
const router = express.Router()


router.get('/', todoController.getAllTodo)

router.get('/:idx', todoController.getTodo)

module.exports = router