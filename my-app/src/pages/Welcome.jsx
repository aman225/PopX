import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-xs h-[600px] rounded-2xl shadow-lg flex flex-col justify-end p-6">
        <div className="mt-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to PopX</h1>
          <p className="text-sm text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>

          <button
            onClick={() => navigate("/signup")}
            className="w-full bg-purple-600 text-white text-sm font-medium py-3 rounded-lg mb-3 hover:bg-purple-700 transition"
          >
            Create Account
          </button>

          <button
            onClick={() => navigate("/login")}
            className="w-full bg-purple-100 text-purple-800 text-sm font-medium py-3 rounded-lg hover:bg-purple-200 transition"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
