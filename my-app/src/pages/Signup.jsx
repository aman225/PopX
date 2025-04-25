import React, { useState } from 'react';

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
      // Handle submission logic
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full bg-white p-6 rounded-md shadow-sm border border-gray-200"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Create your PopX account</h2>

        {[
          { label: 'Full Name*', name: 'fullName' },
          { label: 'Phone number*', name: 'phoneNumber' },
          { label: 'Email address*', name: 'email' },
          { label: 'Password *', name: 'password', type: 'password' },
          { label: 'Company name', name: 'companyName' },
        ].map(({ label, name, type = 'text' }) => (
          <div key={name} className="mb-4">
            <label className="block text-sm font-medium text-purple-600 mb-1">
              {label}
            </label>
            <input
              type={type}
              name={name}
              placeholder={`Enter ${label.replace('*', '').toLowerCase()}`}
              value={formData[name]}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        ))}

        <div className="mb-6">
          <p className="text-sm font-medium text-gray-700 mb-2">Are you an Agency? <span className="text-red-500">*</span></p>
          <div className="flex items-center space-x-6">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="isAgency"
                value="Yes"
                checked={formData.isAgency === 'Yes'}
                onChange={handleChange}
                className="form-radio text-purple-600"
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="isAgency"
                value="No"
                checked={formData.isAgency === 'No'}
                onChange={handleChange}
                className="form-radio text-purple-600"
              />
              <span>No</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={!isFormValid()}
          className={`w-full py-2 rounded-md font-semibold ${
            isFormValid()
              ? 'bg-purple-600 text-white hover:bg-purple-700 transition'
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
