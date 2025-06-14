import React from 'react';
import { Link, Outlet, useLocation } from "react-router-dom";

const AdminPanel = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-gray-700">
          Admin Dashboard
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li><Link to="/admin" className={`block p-2 rounded ${location.pathname === "/admin" ? "bg-gray-700" : ""}`}>Dashboard</Link></li>
            <li><Link to="/admin/blog" className={`block p-2 rounded ${location.pathname === "/admin/blog" ? "bg-gray-700" : ""}`}>Blog</Link></li>
            <li><Link to="/admin/team" className={`block p-2 rounded ${location.pathname === "/admin/team" ? "bg-gray-700" : ""}`}>Team</Link></li>
            <li><Link to="/admin/service" className={`block p-2 rounded ${location.pathname === "/admin/service" ? "bg-gray-700" : ""}`}>Service</Link></li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPanel;
