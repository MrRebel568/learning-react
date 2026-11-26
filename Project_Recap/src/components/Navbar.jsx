import React, { useContext } from "react";
import {
  LayoutDashboard,
  Settings,
  LogOut,
  X,
  Logs,
  Cloudy,
  Clock,
} from "lucide-react";
import { NavLink } from "react-router";
import { Auth } from "../context/AuthContext";

const Navbar = () => {
  let { setLoggedInUser } = useContext(Auth);
  let res = JSON.parse(localStorage.getItem("registered_user"));
  return (
    <aside className="fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-gray-200 bg-white">
      {/* Logo */}
      <div className="flex h-16 items-center justify-between border-b border-gray-200 px-5">
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-lg font-bold text-white">
            D
          </div>
          <span className="text-xl font-bold text-gray-800">Dashboard</span>
        </a>
        <button
          type="button"
          aria-label="Close sidebar"
          className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 lg:hidden"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
        <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Menu
        </p>

        {/* Active item */}
        <NavLink
          to="/main"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
              isActive
                ? "bg-blue-50 text-blue-600"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            }`
          }
          end
        >
          <LayoutDashboard className="h-5 w-5 shrink-0" />
          Dashboard
        </NavLink>

        {/* <a
          href="/users"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
        >
          <Users className="h-5 w-5 shrink-0" />
          Users
        </a> */}

        <NavLink
          to="/main/todolist"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
              isActive
                ? "bg-blue-50 text-blue-600"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            }`
          }
        >
          <Logs className="h-5 w-5 shrink-0" />
          Todo List
        </NavLink>

        <NavLink
          to="/main/pomodoro"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
              isActive
                ? "bg-blue-50 text-blue-600"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            }`
          }
        >
          <Clock className="h-5 w-5 shrink-0" />
          Pomodoro Timer
        </NavLink>

        <NavLink
          to="/main/weather"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
              isActive
                ? "bg-blue-50 text-blue-600"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            }`
          }
        >
          <Cloudy className="h-5 w-5 shrink-0" />
          Weather
        </NavLink>

        <a
          href="/settings"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
        >
          <Settings className="h-5 w-5 shrink-0" />
          Settings
        </a>
      </nav>

      {/* Bottom: Profile + Logout */}
      <div className="border-t border-gray-200 p-3">
        <div className="flex items-center gap-3 rounded-lg px-3 py-2">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
            S
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-gray-800">
              {res[0].name}
            </p>
            <p className="truncate text-xs text-gray-500">{res[0].email}</p>
          </div>
        </div>

        <button
          onClick={() => {
            localStorage.removeItem("logged_users");
            setLoggedInUser(null);
          }}
          type="button"
          className="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50"
        >
          <LogOut className="h-5 w-5 shrink-0" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Navbar;
