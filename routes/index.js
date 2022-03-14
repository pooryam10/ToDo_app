
const express = require('express');

const {showTodos} = require('../controllers/todos');

const router = express.Router();

router.get("/", showTodos);

module.exports = router;