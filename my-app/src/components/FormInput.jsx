// src/components/FormInput.jsx
import React from 'react';

export const FormInput = ({ label, name, type = "text", value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-purple-600 mb-1" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={`Enter ${label.replace('*', '').toLowerCase()}`}
        className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
      />
    </div>
  );
};
