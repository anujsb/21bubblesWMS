import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema(
  {
    EmployeeName: {
      type: String,
      required: true,
      unique: true,
    }, 
    EmployeeEmail: {
      type: String,
      required: true,
      unique: true,
    },
    EmployeePassword: {
      type: String,
      required: true,
    },
    EmployeeProfilePicture: {
      type: String,
      default:
        'https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg',
    },
  },
  { timestamps: true }
);

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;
