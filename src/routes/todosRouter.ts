import { defaultMaxListeners } from 'events';
import {Router} from 'express';
import { createTodo , getTodos} from './../controllers/todos';

const router = Router();

router
.post('/',createTodo)
.get('/',getTodos)
.patch('/:id')
.delete('/:id')


export default router;