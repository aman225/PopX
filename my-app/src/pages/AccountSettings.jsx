import React from "react";

export default function AccountSettingsCard() {
  return (
    <div className="bg-white w-full max-w-[400px] shadow-md rounded-xl border border-gray-200 mx-auto mt-10 overflow-hidden">
      <div className="px-6 pt-6 pb-4 border-b">
        <h2 className="text-xl font-semibold text-gray-800">Account Settings</h2>
      </div>

      <div className="px-6 py-4 flex items-start gap-4">
        <div className="relative w-16 h-16">
          <img
            className="w-16 h-16 rounded-full object-cover border border-gray-300"
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Profile"
          />
          <div className="absolute bottom-0 right-0 bg-purple-600 w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.232 5.232l3.536 3.536m-2.036-1.5A2.5 2.5 0 1118.5 8.5L9 18H5v-4l9.232-9.232z"
              />
            </svg>
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">Marry Doe</h3>
          <p className="text-gray-500 text-sm mb-1">Marry@Gmail.Com</p>
          <p className="text-gray-600 text-sm leading-snug">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
      </div>

      <div className="h-[400px] border-t border-dashed"></div>
    </div>
  );
}
