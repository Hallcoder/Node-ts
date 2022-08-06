"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodos = exports.createTodo = void 0;
const todos_1 = require("../models/todos");
const Todos = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todos_1.Todo(Math.random().toString(), text);
    Todos.push(newTodo);
    res.status(201).json({ message: 'Todo successfully created.', todo: newTodo });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    res.json({ todos: Todos });
};
exports.getTodos = getTodos;
