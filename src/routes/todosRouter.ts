import { defaultMaxListeners } from 'events';
import {Router} from 'express';
import { createTodo } from './../controllers/todos';

const router = Router();

router
.post('/',createTodo)
.get('/')
.patch('/:id')
.delete('/:id')


export default router;