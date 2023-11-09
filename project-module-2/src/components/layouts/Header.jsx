import { Fragment, useEffect, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import "../styles/Header.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logos/Store Logo.png";
import Search from "../others/Search";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../../redux/productSlice";
import { Drawer } from "antd";
import Offcanvas from "react-bootstrap/Offcanvas";
import clsx from "clsx";

export default function Header() {
  const products = useSelector((state) => state.products.products);
  const [searchInput, setSearchInput] = useState("");
  const [searchedKey, setSearchedKey] = useState([]);
  const [isDivVisible, setDivVisible] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // console.log(isDivVisible);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchProducts(searchInput));
    localStorage.setItem("searchedKey", JSON.stringify(searchedKey));
  }, [dispatch, searchedKey]);
  // const [open, setOpen] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchedKey((prevSearchedKey) => [...prevSearchedKey, searchInput]);
    navigate("/searchResult");
  };
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
                    <p className="flex-1">
                      <span style={{ color: "#0f6d68" }}>THAILINH</span> STORE
                    </p>
                  </div>
                </Link>
              </div>
              <div className="ml-auto flex items-center">
                {/* Search */}
                <form className="flex lg:ml-6" onSubmit={handleSubmit}>
                  <Search
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                    searchedKey={searchedKey}
                    setSearchedKey={setSearchedKey}
                    products={products}
                    dispatch={dispatch}
                    searchProducts={searchProducts}
                    isDivVisible={isDivVisible}
                    setDivVisible={setDivVisible}
                    handleSubmit={handleSubmit}
                  />

                  <button className="p-2 searchButton" type="submit">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      className="h-6 w-6 searchIcon"
                      aria-hidden="true"
                    />
                  </button>
                </form>

                <div className="checkOrder">
                  <i
                    className="fa-solid fa-truck-fast fa-2x"
                    style={{ color: "white" }}
                  ></i>
                  <p>Kiểm tra đơn hàng</p>
                </div>

                {/* Cart */}
                <div className="ml-1 flow-root lg:ml-6">
                  <button
                    className="group flex items-center p-2"
                    onClick={handleShow}
                  >
                    <ShoppingBagIcon
                      className="h-8 w-8 flex-shrink-0 cart"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800 quantity">
                      0
                    </span>
                  </button>
                  <Offcanvas
                    show={show}
                    onHide={handleClose}
                    placement="end"
                    className="w-50 rounded-lg"
                  >
                    <Offcanvas.Header className="headerCart" closeButton>
                      <Offcanvas.Title className="title">
                        Giỏ hàng
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="bodyCart"></Offcanvas.Body>
                    <div className="flex footerCart">
                      <button className="flex-1">Xoá</button>
                      <button className="flex-1">Thanh toán</button>
                    </div>
                  </Offcanvas>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
