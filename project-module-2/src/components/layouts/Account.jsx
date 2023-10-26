import React, { useEffect, useState } from "react";
import "../styles/Account.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/userSlice";

function Account() {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const [activeUser, setActiveUser] = useState({
    id: 0,
    active: false,
  });

  return (
    <div>
      {users.map((user) => {
        if (user.active === true) {
          return (
            <div>
              <button>Đăng xuất</button>
            </div>
          );
        } else {
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
      })}
    </div>
  );
}

export default Account;
