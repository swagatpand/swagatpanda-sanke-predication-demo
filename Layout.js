import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-blue-600 text-white p-4 flex gap-4">
        <Link to="/">Dashboard</Link>
        <Link to="/database">Database</Link>
        <Link to="/emergency">Emergency</Link>
        <Link to="/history">History</Link>
      </nav>
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
