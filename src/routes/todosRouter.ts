import { defaultMaxListeners } from 'events';
import {Router} from 'express';

const router = Router();

router
.post('/')
.get('/')
.patch('/:id')
.delete('/:id')


export default router;