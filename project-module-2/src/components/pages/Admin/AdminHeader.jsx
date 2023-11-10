import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/Admin.module.css";
import clsx from "clsx";
import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, patchUsers } from "../../../redux/userSlice";
import { BsJustify } from "react-icons/bs";
import {
  fetchUserLogged,
  postUserLogged,
} from "../../../redux/userLoggedSlice";

function AdminHeader({ selectItem, OpenSidebar }) {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  //   const [searchInput, setSearchInput] = useState("");
  // const inputRef = useRef("");
  // const searchProduct = () => {};

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, [dispatch]);
  // console.log(isAdmin);const users = useSelector((state) => state.users.users);
  const userLogged = useSelector((state) => state.users.userLogged);
  // console.log(userLogged);

  const [updateUser, setUpdateUser] = useState("");
  console.log(updateUser, "update");

  // const [user, setUser] = useState([]);

  // console.log(user);

  // console.log(userLogged);

  // dispatch(postUserLogged(users));
  // const [id, setId] = useState("");

  // console.log(id);
  const usersLogged = useSelector((state) => state.usersLogged.usersLogged);
  // console.log(usersLogged);

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
    //     dispatch(putUserLogged({ updateUser, id: id }));
    //   }
    // });
    // const updateUser = users.find(
    //   (user) => user.userName === userLogged.userName
    // );
    setUpdateUser(users.find((user) => user.userName === userLogged.userName));

    if (updateUser) {
      dispatch(patchUsers({ userLogged, id: updateUser.id }));
      dispatch(postUserLogged(updateUser));
    }
    dispatch(fetchUserLogged());
    // localStorage.setItem("loggedUser", JSON.stringify(usersLogged));

    // const storedLoggedUser = localStorage.getItem("loggedUser");
    // if (storedLoggedUser) {
    //   setUser(JSON.parse(storedLoggedUser));
    // }
    // setUser((prevUser) => [...prevUser, updateUser]);
    // const storedUserLogged = localStorage.getItem("");
    // if (storedUserLogged) {
    //   setUser(JSON.parse(storedUserLogged)); // Đăng nhập người dùng từ localStorage
    // }
  }, [dispatch]);

  const isAdmin = usersLogged.find((key) => key.userName === "Admin");

  // console.log(isAdmin);

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
