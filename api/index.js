import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userEmployeeRoutes from './routes/user.employee.route.js';
import authEmployeeRoutes from './routes/auth.employee.route.js';
import userManagerRoutes from './routes/user.manager.route.js';
import authManagerRoutes from './routes/auth.manager.route.js';
import tasks from './routes/Tasks.js';
import cookieParser from 'cookie-parser';
import path from 'path';

// import notFound from "./middleware/not-found";
// import errorHandlerMiddleware from "./middleware/error-handler.js";

dotenv.config();
// app.use(errorHandlerMiddleware);

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

const __dirname = path.resolve();

const app = express();

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.use(express.json());

app.use(cookieParser());

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

app.use('/api/user/employee', userEmployeeRoutes);
app.use('/api/auth/employee', authEmployeeRoutes);
app.use('/api/user/manager', userManagerRoutes);
app.use('/api/auth/manager', authManagerRoutes);
app.use("/api/v1/tasks", tasks);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
