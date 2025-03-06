import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import authServices from "../services/authServices";

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authServices.resetPassword({ token, password });
      setMessage("Password has been reset successfully.");
      setError(null);
      alert("Password successfully reset");
      setTimeout(() => navigate("/login"), 3000);
    } catch (err) {
      setError("Failed to reset password. Please try again.");
      setMessage(null);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="shadow-lg p-8 mt-5 w-96 bg-white rounded-lg">
        <h4 className="text-center text-2xl font-semibold mb-4">
          Reset Password
        </h4>
        {message && (
          <p className="text-green-500 text-center mb-4">{message}</p>
        )}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New Password"
            required
            className="mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition duration-300"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
