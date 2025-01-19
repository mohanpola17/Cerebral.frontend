import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-64 flex flex-col">
      <div className="p-6 text-center font-bold text-lg border-b border-gray-700">
        Salesway
      </div>
      <nav className="flex-grow mt-4">
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center px-6 py-2 hover:bg-gray-700 rounded transition"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-6 py-2 hover:bg-gray-700 rounded transition">
              Campaigns
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-6 py-2 hover:bg-gray-700 rounded transition">
              Flows
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-6 py-2 hover:bg-gray-700 rounded transition">
              Integrations
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-6 py-2 hover:bg-gray-700 rounded transition">
              Customers
            </a>
          </li>
        </ul>
      </nav>
      <div className="mt-auto p-6 flex items-center">
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="rounded-full w-10 h-10"
        />
        <div className="ml-3">
          <p className="font-semibold">Tom Wang</p>
          <p className="text-sm text-gray-400">Admin</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
