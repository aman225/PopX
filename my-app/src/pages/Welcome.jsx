import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-xs rounded-xl shadow-md p-6 flex flex-col justify-end h-[600px]">
        <div className="mt-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to PopX</h1>
          <p className="text-sm text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
          <button
            onClick={() => navigate("/signup")}
            className="w-full bg-purple-600 text-white font-semibold py-2 rounded-lg mb-3"
          >
            Create Account
          </button>
          <button
            onClick={() => navigate("/login")}
            className="w-full bg-purple-100 text-purple-800 font-semibold py-2 rounded-lg"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
