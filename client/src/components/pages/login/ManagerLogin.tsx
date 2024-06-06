import React from "react";

const ManagerLogin = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="text-center backdrop-blur-md shadow-lg p-10 rounded-xl">
        <h1 className="text-4xl font-bold mb-4">login </h1>
        <form className="p-8 rounded ">
          <div>
            <label className=" text-gray-700">Email</label>
            <input
              type="email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 shadow-sm rounded mt-1"
              placeholder="email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 shadow-sm rounded mt-1"
              placeholder="password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded "
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default ManagerLogin;
