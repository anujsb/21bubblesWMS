import mongoose from 'mongoose';

const managerSchema = new mongoose.Schema(
  {
    ManagerName: {
      type: String,
      required: true,
      unique: true,
    }, 
    ManagerEmail: {
      type: String,
      required: true,
      unique: true,
    },
    ManagerPassword: {
      type: String,
      required: true,
    },
    ManagerProfilePicture: {
      type: String,
      default:
        'https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg',
    },
  },
  { timestamps: true }
);

const Manager = mongoose.model('Manager', managerSchema);

export default Manager;
