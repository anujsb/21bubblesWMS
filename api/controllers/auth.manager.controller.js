import Manager from '../models/manager.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
  const { ManagerName, ManagerEmail, ManagerPassword } = req.body;
  const hashedPassword = bcryptjs.hashSync(ManagerPassword, 10);
  const newManager = new Manager({ ManagerName, ManagerEmail, ManagerPassword: hashedPassword });
  try {
    await newManager.save();
    res.status(201).json({ message: 'Manager created successfully' });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { ManagerEmail, ManagerPassword } = req.body;
  try {
    const validManager = await Manager.findOne({ ManagerEmail });
    if (!validManager) return next(errorHandler(404, 'Manager not found'));
    const validPassword = bcryptjs.compareSync(ManagerPassword, validManager.ManagerPassword);
    if (!validPassword) return next(errorHandler(401, 'wrong credentials'));
    const token = jwt.sign({ id: validManager._id }, process.env.JWT_SECRET);
    const { ManagerPassword: hashedPassword, ...rest } = validManager._doc;
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
    const manager = await Manager.findOne({ ManagerEmail: req.body.ManagerEmail });
    if (manager) {
      const token = jwt.sign({ id: manager._id }, process.env.JWT_SECRET);
      const { ManagerPassword: hashedPassword, ...rest } = manager._doc;
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
      const newManager = new Manager({
        ManagerName:
          req.body.name.split(' ').join('').toLowerCase() +
          Math.random().toString(36).slice(-8),
        ManagerEmail: req.body.ManagerEmail,
        ManagerPassword: hashedPassword,
        ManagerProfilePicture: req.body.photo,
      });
      await newManager.save();
      const token = jwt.sign({ id: newManager._id }, process.env.JWT_SECRET);
      const { ManagerPassword: hashedPassword2, ...rest } = newManager._doc;
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
