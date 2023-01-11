const express = require('Express')
const todoController = require('../controllers/todoController')
const router = express.Router()

router.get('/', todoController.getAllTodo)

router.get('/search', todoController.searchTodo)

router.get('/:idx', todoController.getTodo)

router.post('/', todoController.createTodo)

router.put('/:idx', todoController.editTodo)

router.delete('/:idx', todoController.deleteTodo)


module.exports = router