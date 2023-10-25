import React from "react";
import "../styles/Account.css"
import { Link } from "react-router-dom";

function Account() {
  return (
    <div className="lr lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 px-4">
      <Link
        to="/login"
        className="l text-sm font-medium text-gray-700 hover:text-gray-800 "
      >
        Sign in
      </Link>
      <span className="h-6 w-px bg-gray-200" />
      <Link
        to="/register"
        className="r text-sm font-medium text-gray-700 hover:text-gray-800"
      >
        Create account
      </Link>
    </div>
  );
}

export default Account;
