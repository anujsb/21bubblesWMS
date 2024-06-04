import Employee from '../models/employee.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
  const { EmployeeName, EmployeeEmail, EmployeePassword } = req.body;
  const hashedPassword = bcryptjs.hashSync(EmployeePassword, 10);
  const newEmployee = new Employee({ EmployeeName, EmployeeEmail, EmployeePassword: hashedPassword });
  try {
    await newEmployee.save();
    res.status(201).json({ message: 'Employee created successfully' });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { EmployeeEmail, EmployeePassword } = req.body;
  try {
    const validEmployee = await Employee.findOne({ EmployeeEmail });
    if (!validEmployee) return next(errorHandler(404, 'Employee not found'));
    const validPassword = bcryptjs.compareSync(EmployeePassword, validEmployee.EmployeePassword);
    if (!validPassword) return next(errorHandler(401, 'wrong credentials'));
    const token = jwt.sign({ id: validEmployee._id }, process.env.JWT_SECRET);
    const { EmployeePassword: hashedPassword, ...rest } = validEmployee._doc;
    const expiryDate = new Date(Date.now() + 3600000); // 1 hour
    res
      .cookie('access_token', token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const google = async (req, res, next) => {
  try {
    const employee = await Employee.findOne({ EmployeeEmail: req.body.EmployeeEmail });
    if (employee) {
      const token = jwt.sign({ id: employee._id }, process.env.JWT_SECRET);
      const { EmployeePassword: hashedPassword, ...rest } = employee._doc;
      const expiryDate = new Date(Date.now() + 3600000); // 1 hour
      res
        .cookie('access_token', token, {
          httpOnly: true,
          expires: expiryDate,
        })
        .status(200)
        .json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newEmployee = new Employee({
        EmployeeName:
          req.body.name.split(' ').join('').toLowerCase() +
          Math.random().toString(36).slice(-8),
        EmployeeEmail: req.body.EmployeeEmail,
        EmployeePassword: hashedPassword,
        EmployeeProfilePicture: req.body.photo,
      });
      await newEmployee.save();
      const token = jwt.sign({ id: newEmployee._id }, process.env.JWT_SECRET);
      const { EmployeePassword: hashedPassword2, ...rest } = newEmployee._doc;
      const expiryDate = new Date(Date.now() + 3600000); // 1 hour
      res
        .cookie('access_token', token, {
          httpOnly: true,
          expires: expiryDate,
        })
        .status(200)
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};

export const signout = (req, res) => {
  res.clearCookie('access_token').status(200).json('Signout success!');
};
