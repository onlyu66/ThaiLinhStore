import React, { useEffect } from "react";
import styles from "../../styles/Admin.module.css";
import clsx from "clsx";
import { Link, parsePath } from "react-router-dom";
import { patchUsers, userAction } from "../../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserLogged,
  fetchUserLogged,
  patchUserLogged,
} from "../../../redux/userLoggedSlice";

function AdminSidebar({ setSelectItem, openSidebarToggle, OpenSidebar }) {
  const usersLogged = useSelector((state) => state.usersLogged.usersLogged);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserLogged());
  }, [dispatch]);
  return (
    <div
      className={clsx(
        styles.sideBar,
        "bg-neutral-900 text-white",
        openSidebarToggle ? styles.sidebaReponsive : ""
      )}
    >
      {" "}
      {/* <div className={styles.sidebarTitle}>
        <div className='sidebar-brand'>
          <BsCart3  className='icon_header'/> SHOP
      </div> 
        <h3>THAILINH STORE</h3>
        <span className={styles.close_icon} onClick={OpenSidebar}>
          X
        </span>
      </div> */}
      <div>
        <div className={styles.sidebarTitle}>
          {/* <div className="sidebar-brand">
            <BsCart3 className="icon_header" /> SHOP
          </div> */}
          <h3>THAILINH STORE</h3>
          <span className={styles.close_icon} onClick={OpenSidebar}>
            X
          </span>
        </div>
        {/* <h3>THAILINH STORE</h3> */}
        <ul className="list-none m-0 p-0 mt-5 text-slate-400">
          <Link
            to={"/admin/dashboard"}
            className={clsx(styles.link, "text-slate-400")}
          >
            <li onClick={() => setSelectItem("dashboard")}>
              <i className="fa-solid fa-gauge mr-1"></i>Dashboard
            </li>
          </Link>

          <Link
            to={"/admin/product"}
            className={clsx(styles.link, "text-slate-400")}
          >
            <li onClick={() => setSelectItem("products")}>
              <i className="fa-brands fa-uncharted mr-1"></i>Products
            </li>
          </Link>

          <li onClick={() => setSelectItem("orders")}>
            <i className="fa-solid fa-border-top-left mr-1"></i>Orders
          </li>
          <li onClick={() => setSelectItem("users")}>
            <i className="fa-solid fa-users-rays mr-1"></i>Users
          </li>
        </ul>
      </div>
      <div>
        <ul className="list-none m-0 p-0 text-slate-400">
          <li>Help</li>
          <li>Contact us</li>
        </ul>
        {/* <Link
          to="/login"
          
        > */}
        <div
          className="flex no-underline text-white hover:font-semibold mt-4"
          onClick={() => {
            const user = {
              loggedIn: false,
            };
            dispatch(patchUserLogged(user));
            dispatch(patchUsers(usersLogged));
            dispatch(deleteUserLogged());
            userAction.logout();
          }}
        >
          <i class="fa-solid fa-right-to-bracket mr-1 mt-1.5"></i>
          <div>Log out</div>
        </div>

        {/* </Link> */}
      </div>
    </div>
  );
}

export default AdminSidebar;
