import { RequestHandler } from "express"
import {Todo} from '../models/todos'
const Todos:Todo[] = [];

export const createTodo: RequestHandler =  (req,res,next) => {
const text = (req.body as {text:string}).text
const newTodo  = new Todo(Math.random().toString(),text)

Todos.push(newTodo);
res.status(201).json({message:'Todo successfully created.',todo:newTodo});
}

export const getTodos: RequestHandler = (req,res,next) => {
    res.json({todos:Todos})
}