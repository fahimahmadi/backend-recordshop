import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { incReqCounter } from './middlewares/index.js';
import userRouter from './routers/userRouter.js';
// import postRouter from './routers/postRouter.js';


//create server
const App = express();


//built in middleware
App.use(express.json());
App.use(express.urlencoded({ extended: true }));

App.use((req, res, next) => { console.log(req.hostname);  next()})

//third party middlewares
App.use(cors());
App.use(morgan('tiny'));

//custom middleware
App.use(incReqCounter);

/* --------------------------- //routers -------------------------- */
App.use('/user', userRouter)
// App.use('/posts', postRouter)

/* ------------------------- error handling ------------------------ */
//route not found
App.use((req, res, next) => {
    const err = new Error("Not Found! 🌝");
    err.status = 404;

    next(err);
})

//Error Handler
App.use((err, req, res, next) => {
    res.status(err.status || 500).send(err.message)
});

//port
const port = process.env.PORT || 5000;
App.listen(port, console.log(`Server is up on port ${port} 🌻`));


