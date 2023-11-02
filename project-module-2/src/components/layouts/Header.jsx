import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logos/Store Logo.png";
import Search from "../others/Search";

export default function Header() {
  // const [open, setOpen] = useState(false);

  return (
    <div className="container">
      <header className="relative headers">
        <nav aria-label="Top" className="px-4 sm:px-6 lg:px-8 head">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button> */}

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0 logos">
                <Link to="/" className="no-underline">
                  <div className="flex">
                    <span className="sr-only">Your Company</span>
                    <img className="logo flex-none" src={logo} alt="" />
                    <p className="flex-1"><span style={{color: "#0f6d68"}}>THAILINH</span> STORE</p>
                  </div>
                </Link>
              </div>
              <div className="ml-auto flex items-center">
                {/* Search */}
                <div className="flex lg:ml-6">
                  <Search />
                  <button className="p-2 searchButton">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      className="h-6 w-6 searchIcon"
                      aria-hidden="true"
                    />
                  </button>
                </div>

                <div className="checkOrder">
                  <i
                    className="fa-solid fa-truck-fast fa-2x"
                    style={{ color: "white" }}
                  ></i>
                  <p>Kiểm tra đơn hàng</p>
                </div>

                {/* Cart */}
                <div className="ml-1 flow-root lg:ml-6">
                  <button className="group flex items-center p-2">
                    <ShoppingBagIcon
                      className="h-8 w-8 flex-shrink-0 cart"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800 quantity">
                      0
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
