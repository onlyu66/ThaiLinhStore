import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/Admin.module.css";
import clsx from "clsx";
import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, patchUsers } from "../../../redux/userSlice";
import { BsJustify } from "react-icons/bs";
import {
  fetchUsersLogged,
  postUsersLogged,
} from "../../../redux/usersLoggedSlice";

function AdminHeader({ selectItem, OpenSidebar }) {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  //   const [searchInput, setSearchInput] = useState("");
  // const inputRef = useRef("");
  // const searchProduct = () => {};

  const userLogged = useSelector((state) => state.users.userLogged);
  // console.log(userLogged);
  const [updateUser, setUpdateUser] = useState("");
  // console.log(updateUser, "update");

  const usersLogged = useSelector((state) => state.usersLogged.usersLogged);
  // console.log(usersLogged);


  useEffect(() => {
    dispatch(fetchUsers());

    setUpdateUser(users.find((user) => user.userName === userLogged.userName));

    if (updateUser) {
      dispatch(patchUsers({ userLogged, id: updateUser.id }));
      dispatch(postUsersLogged(updateUser));
    }
    dispatch(fetchUsersLogged());
  }, [updateUser]);

  const isAdmin = usersLogged.find((key) => key.userName === "Admin");

  return (
    <div className={clsx(styles.header, "flex justify-between p-3")}>
      <div className={styles.menuIcon}>
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      {selectItem === "dashboard" ? (
        <p>Welcome to ThaiLinh Store</p>
      ) : selectItem === "products" ? (
        <p>PRODUCTS</p>
      ) : selectItem === "users" ? (
        <p>USERS</p>
      ) : (
        <p>ORDERS</p>
      )}
      <Input
        placeholder="Search"
        className={clsx(styles.inputSearch, "w-1/5 h-10")}
        type="search"
        // ref={inputRef}
        // onChange={searchProduct}
      />
      <i
        className={
          selectItem === "dashboard"
            ? clsx(styles.searchIcon, "fa-solid fa-magnifying-glass")
            : selectItem === "products"
            ? clsx(styles.searchIcon1, "fa-solid fa-magnifying-glass")
            : selectItem === "users"
            ? clsx(styles.searchIcon2, "fa-solid fa-magnifying-glass")
            : clsx(styles.searchIcon3, "fa-solid fa-magnifying-glass")
        }
      ></i>
      {isAdmin ? (
        <div className="flex mr-8">
          <i className="fa-regular fa-bell mr-3 mt-1.5"></i>
          <img
            src={isAdmin.image}
            alt=""
            className="w-8 h-8 rounded-full mr-2"
          />
          {/* {console.log(isUser)} */}
          <p>{isAdmin.userName}</p>
          <i class="fa-solid fa-caret-down mt-1 ml-1"></i>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default AdminHeader;
