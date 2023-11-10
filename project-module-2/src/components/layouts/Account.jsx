import React, { useEffect, useState } from "react";
import "../styles/Account.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsersLogged,
  postUsersLogged,
} from "../../redux/usersLoggedSlice";
import { fetchUsers, patchUsers, userAction } from "../../redux/userSlice";

function Account() {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const userLogged = useSelector((state) => state.users.userLogged);

  const [updateUser, setUpdateUser] = useState("");
  console.log(updateUser, "update");

  const usersLogged = useSelector((state) => state.usersLogged.usersLogged);

  useEffect(() => {
    dispatch(fetchUsers());

    setUpdateUser(users.find((user) => user.userName === userLogged.userName));

    if (updateUser) {
      dispatch(patchUsers({ userLogged, id: updateUser.id }));
      dispatch(postUsersLogged(updateUser));
    }
    dispatch(fetchUsersLogged());
  }, [updateUser]);

  const isUser = usersLogged.find((key) => key.userName !== "Admin");

  return (
    <div className="lr lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 px-4">
      {isUser ? (
        <div className="flex mr-8">
          <i className="fa-regular fa-bell mr-3 mt-1.5"></i>
          <img
            src={isUser.image}
            alt=""
            className="w-8 h-8 rounded-full mr-2"
          />
          {/* {console.log(isUser)} */}
          <p>{isUser.userName}</p>
          <i class="fa-solid fa-caret-down mt-1 ml-1"></i>
          <button
            onClick={() => {
              // setUpdateUser(user);
              // userLogged = updateUser;
              // dispatch(patchUsers({ user, id: id }));
              dispatch(userAction.logout());
              // localStorage.removeItem("userLogged");
            }}
          >
            Đăng xuất
          </button>
        </div>
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
