import erxpress from "express";

const userRouter = erxpress.Router();

userRouter.use((req, res, next) => {
  console.log('Обработчик Users');
  next();
});

userRouter.post('/login', (req, res) => {
  res.send('login');
});

userRouter.post('/registr', (req, res) => {
  res.send('registr');
});

export {userRouter};