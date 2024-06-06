import React from "react";
import { Link } from "react-router-dom";

const LoginOptions: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="text-center backdrop-blur-md shadow-lg p-10 rounded-xl">
        <h1 className="text-4xl font-bold mb-4">
          How do you want to use 21Bubbles-WMS?
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          We'll personalize your setup experience accordingly.
        </p>
        <div className="space-y-4">
          <Link
            to="/managerlogin"
            className="block px-4 py-2 text-lg font-semibold text-black shadow-gray-500 shadow-sm rounded-md hover:shadow-lg "
          >
            Login as manager
          </Link>
          <Link
            to="/employeelogin"
            className="block px-4 py-2 text-lg font-semibold text-black shadow-gray-500 shadow-sm rounded-md hover:shadow-xl"
          >
            Login as employee
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginOptions;
