import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogoutIcon, UsersIcon } from "../../../assets/icons";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen p-3 bg-gray-800 shadow w-60">
      <div className="space-y-3">
        <div className="flex items-center">
          <h2 className="text-xl font-bold text-white">
            Yangiyer flour tarding
          </h2>
        </div>

        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="rounded-sm">
              <Link
                to={"photos"}
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <UsersIcon />
                <span className="text-gray-100">Photos</span>
              </Link>
            </li>
            <li className="rounded-sm">
              <button
                onClick={() => {
                  window.localStorage.removeItem("token");
                  navigate("/");
                  window.location.reload(false);
                }}
                to={"#"}
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <LogoutIcon />
                <span className="text-gray-100">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
