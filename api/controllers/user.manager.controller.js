import Manager from '../models/manager.model.js';
import { errorHandler } from '../utils/error.js';
import bcryptjs from 'bcryptjs';

export const test = (req, res) => {
  res.json({
    message: 'API is working!',
  });
};

// update Manager

export const updateManager = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, 'You can update only your account!'));
  }
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updatedManager = await Manager.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          ManagerName: req.body.ManagerName,
          ManagerEmail: req.body.ManagerEmail,
          ManagerPassword: req.body.ManagerPassword,
          ManagerProfilePicture: req.body.ManagerProfilePicture,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updatedManager._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};


// delete Manager


export const deleteManager = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, 'You can delete only your account!'));
  }
  try {
    await Manager.findByIdAndDelete(req.params.id);
    res.status(200).json('Manager has been deleted...');
  } catch (error) {
    next(error);
  }

}