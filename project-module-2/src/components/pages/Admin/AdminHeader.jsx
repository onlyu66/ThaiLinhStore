import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/Admin.module.css";
import clsx from "clsx";
import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../../redux/userSlice";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";

function AdminHeader({ selectItem, OpenSidebar }) {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  //   const [searchInput, setSearchInput] = useState("");
  const inputRef = useRef("");
  const searchProduct = () => {
    
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const isAdmin = users.find((user) => user.role === "Admin");
  console.log(isAdmin);
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
        ref={inputRef}
        onChange={searchProduct}
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
      <div className="flex mr-8">
        <i className="fa-regular fa-bell mr-3 mt-1.5"></i>
        <img
          src="{isAdmin.image}"
          alt=""
          className="w-8 h-8 rounded-full mr-2"
        />
        {/* {console.log(isUser)} */}
        <p>Admin</p>
        <i class="fa-solid fa-caret-down mt-1 ml-1"></i>
      </div>
    </div>
  );
}

export default AdminHeader;
