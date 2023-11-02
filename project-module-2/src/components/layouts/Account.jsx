import React, { useEffect, useState } from "react";
import "../styles/Account.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserLogged, fetchUserLogged } from "../../redux/userLoggedSlice";

function Account() {
  const userLogged = useSelector((state) => state.userLogged.userLogged);
  // console.log(userLogged);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserLogged());
  }, [dispatch]);

  

  return (
    <div>
      {userLogged.length > 0 ? (
        userLogged.map((user) => (
          <div key={user.id}>
            <div>{user.userName}</div>
            <button onClick={() => dispatch(deleteUserLogged(user.id))}>
              Đăng xuất
            </button>
          </div>
        ))
      ) : (
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
      )}
    </div>
  );
}

export default Account;
