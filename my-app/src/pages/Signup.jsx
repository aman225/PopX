// src/pages/Signup.jsx
import React, { useState } from 'react';
import { FormInput } from '../components/Forminput';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: '',
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'radio' ? value : value,
    });
  };

  const isFormValid = () => {
    const { fullName, phoneNumber, email, password, isAgency } = formData;
    return fullName && phoneNumber && email && password && isAgency;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log('Form Data:', formData);
      // Handle API submission here
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xs bg-white rounded-2xl shadow-md p-6"
      >
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Create your PopX account
        </h2>

        {[
          { label: 'Full Name*', name: 'fullName' },
          { label: 'Phone number*', name: 'phoneNumber' },
          { label: 'Email address*', name: 'email' },
          { label: 'Password*', name: 'password', type: 'password' },
          { label: 'Company name', name: 'companyName' },
        ].map(({ label, name, type = 'text' }) => (
          <FormInput
            key={name}
            label={label}
            name={name}
            type={type}
            value={formData[name]}
            onChange={handleChange}
          />
        ))}

        <div className="mb-6">
          <p className="text-sm font-medium text-gray-700 mb-2">
            Are you an Agency? <span className="text-red-500">*</span>
          </p>
          <div className="flex items-center gap-6">
            {['Yes', 'No'].map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 text-sm text-gray-800 cursor-pointer"
              >
                <input
                  type="radio"
                  name="isAgency"
                  value={option}
                  checked={formData.isAgency === option}
                  onChange={handleChange}
                  className="accent-purple-600"
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={!isFormValid()}
          className={`w-full py-3 text-sm rounded-md font-semibold transition ${
            isFormValid()
              ? 'bg-purple-600 text-white hover:bg-purple-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
