"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_1 = require("./../controllers/todos");
const router = (0, express_1.Router)();
router
    .post('/', todos_1.createTodo)
    .get('/', todos_1.getTodos)
    .patch('/:id')
    .delete('/:id');
exports.default = router;
