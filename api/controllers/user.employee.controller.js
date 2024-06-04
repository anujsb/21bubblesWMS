import Employee from '../models/employee.model.js';
import { errorHandler } from '../utils/error.js';
import bcryptjs from 'bcryptjs';

export const test = (req, res) => {
  res.json({
    message: 'API is working!',
  });
};

// update Employee

export const updateEmployee = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, 'You can update only your account!'));
  }
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          EmployeeName: req.body.EmployeeName,
          EmployeeEmail: req.body.EmployeeEmail,
          EmployeePassword: req.body.EmployeePassword,
          EmployeeProfilePicture: req.body.EmployeeProfilePicture,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updatedEmployee._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};


// delete Employee


export const deleteEmployee = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, 'You can delete only your account!'));
  }
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.status(200).json('Employee has been deleted...');
  } catch (error) {
    next(error);
  }

}