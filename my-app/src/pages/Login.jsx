import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  const handleLogin = () => {
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full bg-white p-6 rounded-md shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Sign in to your PopX account</h2>
        <p className="text-sm text-gray-500 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-purple-600 mb-1">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter email address"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-purple-600 mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          onClick={handleLogin}
          disabled={!isFormValid}
          className={`w-full py-2 rounded-md font-semibold ${
            isFormValid
              ? 'bg-purple-600 text-white hover:bg-purple-700 transition'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
