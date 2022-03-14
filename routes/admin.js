
const express = require('express');

const {addTodo, deleteTodo, completeTodo} = require('../controllers/admin');

const router = express.Router();

router.post("/add-todo", addTodo);

router.get("/delete-todo/:id", deleteTodo);
router.get("/completed-todo/:id", completeTodo);

module.exports = router;