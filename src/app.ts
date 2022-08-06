import express, { NextFunction } from 'express';
import router from './routes/todosRouter';
import { json } from 'body-parser';
const app = express();

app.use(json())
app.use('/todo',router)
app.use((err:Error,req:express.Request,res:express.Response,next:NextFunction) => {
    // if (err) return next(err);
    res.status(500).json({ message: err.message });
})
app.listen(3000);