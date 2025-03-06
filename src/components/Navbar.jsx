import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = ({ isLoggedIn, onLogout }) => {
  const userRole = localStorage.getItem("userRole"); // Get user role from local storage

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">Freelance Marketplace</h1>
      <div className="flex justify-center items-center space-x-4">
        <ul className="flex flex-row space-x-4">
          {userRole === "client" && (
            <>
              <li>
                <Link to="/post-job" className="hover:underline">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link to="/find-freelancers" className="hover:underline">
                  Find a Freelancer
                </Link>
              </li>
            </>
          )}
          {userRole === "freelancer" && (
            <li>
              <Link to="/find-jobs" className="hover:underline">
                Find a Job
              </Link>
            </li>
          )}
          <li>
            <Link to="/about" className="hover:underline">
              About
            </Link>
          </li>
        </ul>
        {isLoggedIn ? (
          <>
            <Link to="/profile" className="hover:underline">
              <FaUserCircle size={24} title="Profile" />
            </Link>
            <button onClick={onLogout} className="bg-red-600 px-4 py-2 rounded">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="bg-blue-600 px-4 py-2 rounded">
              Login
            </Link>
            <Link to="/register" className="bg-green-600 px-4 py-2 rounded">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
