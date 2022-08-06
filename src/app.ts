import express, { NextFunction } from 'express';
import router from './routes/todosRouter';

const app = express();

app.use('/todo',router)
app.use((err:Error,req:express.Request,res:express.Response,next:NextFunction) => {
    // if (err) return next(err);
    res.status(500).json({ message: err.message });
})
app.listen(3000);