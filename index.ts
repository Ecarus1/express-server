// import http from "http";
import express, {Request, Response, NextFunction } from "express";
import { userRouter } from "./users/users";

const __PORT = 8800;

const app = express();

app.use((req, res, next) => {
  console.log(`Время ${Date.now()}`);
});

app.get('/hello', (req, res) => {
  throw new Error('Error!!!');
});

app.use('/users', userRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err.message);
  res.status(401).send(err.message);
});

app.listen(__PORT, () => {
  console.log(`Сервер запущен на http://localhost:${__PORT}`)
});