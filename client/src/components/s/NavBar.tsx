import React, { useState } from "react";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md p-2 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img className="h-8 w-8" src="/logo.svg" alt="Logo" />
        </div>

        {/* Centered Search Box */}
        <div className="flex-1 flex justify-center relative">
          <div className="w-full max-w-lg relative">
            <div className="relative" onClick={() => setIsOpen(!isOpen)}>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-6 h-6 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </div>
              <input
                className={`py-2 pl-10 pr-4 w-full bg-transparent backdrop-blur-md shadow-md rounded-xl text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none ${
                  isOpen ? "border-blue-500" : ""
                }`}
                type="text"
                placeholder="Search or type a command"
                readOnly
              />
            </div>
            {/* SearchBox Dropdown */}
            {isOpen && (
              <div className="absolute z-50 w-full rounded-xl shadow-md mt-1 bg-white">
                <div className="max-h-60 p-2 overflow-y-auto">
                  {/* Example output item - Repeat for each item */}
                  <div className="py-2 px-3 flex items-center gap-x-3 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100">
                    <svg
                      className="w-6 h-6 text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    <span className="text-sm text-gray-800">
                      Compose an email
                    </span>
                    <span className="ml-auto text-xs text-gray-400">Gmail</span>
                  </div>
                  {/* Add more items here */}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* User Icon */}
        <div className="relative flex items-center">
          <img
            className="w-8 h-8 rounded-full"
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
            alt="User"
          />
          <span className="absolute bottom-0 right-0 block w-3.5 h-3.5 rounded-full ring-2 ring-white bg-gray-400"></span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
