import React, { useEffect, useState } from "react";
import "../styles/Account.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserLogged,
  fetchUserLogged,
  postUserLogged,
  putUserLogged,
} from "../../redux/userLoggedSlice";
import { fetchUsers, patchUsers, userAction } from "../../redux/userSlice";

function Account() {
  const users = useSelector((state) => state.users.users);
  const userLogged = useSelector((state) => state.users.userLogged);
  // console.log(userLogged);

  const usersLogged = useSelector((state) => state.usersLogged.usersLogged);
  console.log(usersLogged);
  const [updateUser, setUpdateUser] = useState("");
  console.log(updateUser, "update");

  const [user, setUser] = useState([]);
  // localStorage.setItem("loggedUser", JSON.stringify(user));

  // console.log(user);

  // console.log(userLogged);

  const dispatch = useDispatch();
  // dispatch(postUserLogged(users));
  const [id, setId] = useState("");
  // console.log(id);

  useEffect(() => {
    dispatch(fetchUsers());

    // users.map((user) => {
    //   if (user.userName === userLogged.userName) {
    //     dispatch(patchUsers({ userLogged, id: user.id }));
    //     setId(user.id);
    //     setUpdateUser(user);
    //     dispatch(postUserLogged(updateUser));
    //   }
    //   if (user.userName !== userLogged.userName) {
    //     dispatch(putUserLogged({ updateUser, id: user.id }));
    //   }
    // });

    // const updateUser = users.find(
    //   (user) => user.userName === userLogged.userName
    // );

    // if (updateUser) {
    //   dispatch(patchUsers({ userLogged, id: updateUser.id }));
    //   dispatch(postUserLogged(updateUser));
    // }

    // const storedLoggedUser = localStorage.getItem("loggedUser");
    // if (storedLoggedUser) {
    //   setUpdateUser(JSON.parse(storedLoggedUser));
    // }
    // setUser((prevUser) => [...prevUser, updateUser]);
    // const storedUserLogged = localStorage.getItem("");
    // if (storedUserLogged) {
    //   const userss = JSON.parse(storedUserLogged);
    //   dispatch(userAction.login(userss)); // Đăng nhập người dùng từ localStorage
    // }
  }, [dispatch]);

  return (
    <div>
      {userLogged ? (
        <div className="lr lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 px-4">
          <div>{userLogged.userName}</div>
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
