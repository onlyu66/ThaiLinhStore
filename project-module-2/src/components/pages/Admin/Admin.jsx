import React from "react";
import styles from "../../styles/Admin.module.css";
import clsx from "clsx";
import { Link, Outlet } from "react-router-dom";
import { Input } from "antd";

function Admin() {
  return (
    <div className={clsx(styles.container, "rounded")}>
      <div className={clsx(styles.sideBar, "bg-neutral-900 text-white")}>
        <div>
          <h3>THAILINH STORE</h3>
          <ul className="list-none m-0 p-0 mt-5 text-slate-400">
            <Link
              to={"/admin/dashboard"}
              className={clsx(styles.link, "text-slate-400")}
            >
              <li>
                <i className="fa-solid fa-gauge mr-1"></i>Dashboard
              </li>
            </Link>

            <Link
              to={"/admin/product"}
              className={clsx(styles.link, "text-slate-400")}
            >
              <li>
                <i className="fa-brands fa-uncharted mr-1"></i>Products
              </li>
            </Link>

            <li>
              <i className="fa-solid fa-border-top-left mr-1"></i>Orders
            </li>
            <li>
              <i className="fa-solid fa-users-rays mr-1"></i>Users
            </li>
          </ul>
        </div>
        <div>
          <ul className="list-none m-0 p-0 text-slate-400">
            <li>Help</li>
            <li>Contact us</li>
          </ul>
          <Link
            to="/login"
            className="flex no-underline text-white hover:font-semibold mt-4"
          >
            <i class="fa-solid fa-right-to-bracket mr-1 mt-1.5"></i>
            <div>Log out</div>
          </Link>
        </div>
      </div>
      <div className={clsx(styles.header, "flex justify-between p-3")}>
        <p>Welcome to ThaiLinh Store</p>
        <Input
          placeholder="Search"
          className={clsx(styles.inputSearch, "w-1/5 h-10")}
        />
        <i
          className={clsx(styles.searchIcon, "fa-solid fa-magnifying-glass")}
        ></i>
        <div className="flex mr-8">
          <i className="fa-regular fa-bell mr-3 mt-1.5"></i>
          <img src="" alt="" className="w-8 h-8 rounded-full mr-2" />
          <p>Admin</p>
          <i class="fa-solid fa-caret-down mt-1 ml-1"></i>
        </div>
      </div>
      <div className={clsx(styles.content)}>
        <Outlet />
      </div>
    </div>
  );
}

export default Admin;
