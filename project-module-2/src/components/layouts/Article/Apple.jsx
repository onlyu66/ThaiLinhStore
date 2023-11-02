import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import clsx from "clsx";
import styles from "../../styles/Apple.module.css";
import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, productAction } from "../../../redux/productSlice";
import Pagination from "react-bootstrap/Pagination";

function Apple() {
  const imgs = [
    "https://cdn.hoanghamobile.com/i/cat/Uploads/2022/09/07/logoooooooooooooooo.png",
    "https://cdn.hoanghamobile.com/i/cat/Uploads/2020/11/30/samsung-logo-transparent.png",
    "https://cdn.hoanghamobile.com/i/cat/Uploads/2023/07/18/xiaomi-logo.png",
    "https://cdn.hoanghamobile.com/i/cat/Uploads/2020/09/14/brand%20(3).png",
    "https://cdn.hoanghamobile.com/i/cat/Uploads/2023/06/02/tecno.png",
    "https://cdn.hoanghamobile.com/i/cat/Uploads/2020/09/14/brand%20(4).png",
    "https://cdn.hoanghamobile.com/i/cat/Uploads/2020/09/14/brand%20(6).png",
    "https://cdn.hoanghamobile.com/i/cat/Uploads/2020/11/30/vivo-logo.png",
    "https://cdn.hoanghamobile.com/i/cat/Uploads/2023/06/19/honor-logo-2022-svg.png",
    "https://cdn.hoanghamobile.com/i/cat/Uploads/2023/08/22/htc-new-logo-svg.png",
    "https://cdn.hoanghamobile.com/i/cat/Uploads/2023/05/26/infinix-logo-svg.png",
    "https://cdn.hoanghamobile.com/i/cat/Uploads/2023/06/12/rog.png",
    "https://cdn.hoanghamobile.com/i/cat/Uploads/2021/12/24/xorr.png",
    "https://cdn.hoanghamobile.com/i/cat/Uploads/2020/10/30/logo-masstel-4.png",
    "https://cdn.hoanghamobile.com/i/cat/Uploads/2023/06/02/tcl.png",
    "https://cdn.hoanghamobile.com/i/cat/Uploads/2023/08/02/logo-moi-ra-2.png",
  ];
  const products = useSelector((state) => state.products.products);
  const phones = products.filter(
    (phone) => phone.type === "phone" && phone.brand === "Apple"
  );

  const [category, setCategory] = useState("");
  const [rangePrice, setRangePrice] = useState("");

  const phonesPerPage = useSelector((state) => state.products.phonesPerPage);
  const currentPage = useSelector((state) => state.products.currentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  let count10_12 = 0;
  let count12_15 = 0;
  let count15_20 = 0;
  let count20_100 = 0;

  for (let i = 0; i < phones.length; i++) {
    let price = Math.floor(phones[i].price.split(",").join("")) / 1000000;
    if (phones[i].type === "phone" && price >= 10 && price < 12) {
      count10_12++;
    }
    if (phones[i].type === "phone" && price >= 12 && price < 15) {
      count12_15++;
    }
    if (phones[i].type === "phone" && price >= 15 && price < 20) {
      count15_20++;
    }
    if (phones[i].type === "phone" && price >= 20 && price < 100) {
      count20_100++;
    }
  }

  let temp = [];
  let temp_ = [];

  if (category === "iPhone11Sr") {
    temp = phones.filter((phone) => phone.category === "iPhone 11 series");
    if (rangePrice === "10_12") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 10 && price < 12) {
          return true;
        }
      });
    } else if (rangePrice === "12_15") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 12 && price < 15) {
          return true;
        }
      });
    } else if (rangePrice === "15_20") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 15 && price < 20) {
          return true;
        }
      });
    } else if (rangePrice === "20_100") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 20 && price < 100) {
          return true;
        }
      });
    } else {
      temp_ = temp;
    }
  } else if (category === "iPhone12Sr") {
    temp = phones.filter((phone) => phone.category === "iPhone 12 series");
    if (rangePrice === "10_12") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 10 && price < 12) {
          return true;
        }
      });
    } else if (rangePrice === "12_15") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 12 && price < 15) {
          return true;
        }
      });
    } else if (rangePrice === "15_20") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 15 && price < 20) {
          return true;
        }
      });
    } else if (rangePrice === "20_100") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 20 && price < 100) {
          return true;
        }
      });
    } else {
      temp_ = temp;
    }
  } else if (category === "iPhone13Sr") {
    temp = phones.filter((phone) => phone.category === "iPhone 13 series");
    if (rangePrice === "10_12") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 10 && price < 12) {
          return true;
        }
      });
    } else if (rangePrice === "12_15") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 12 && price < 15) {
          return true;
        }
      });
    } else if (rangePrice === "15_20") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 15 && price < 20) {
          return true;
        }
      });
    } else if (rangePrice === "20_100") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 20 && price < 100) {
          return true;
        }
      });
    } else {
      temp_ = temp;
    }
  } else if (category === "iPhone14Sr") {
    temp = phones.filter((phone) => phone.category === "iPhone 14 series");
    if (rangePrice === "10_12") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 10 && price < 12) {
          return true;
        }
      });
    } else if (rangePrice === "12_15") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 12 && price < 15) {
          return true;
        }
      });
    } else if (rangePrice === "15_20") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 15 && price < 20) {
          return true;
        }
      });
    } else if (rangePrice === "20_100") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 20 && price < 100) {
          return true;
        }
      });
    } else {
      temp_ = temp;
    }
  } else if (category === "iPhone15Sr") {
    temp = phones.filter((phone) => phone.category === "iPhone 15 series");
    if (rangePrice === "10_12") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 10 && price < 12) {
          return true;
        }
      });
    } else if (rangePrice === "12_15") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 12 && price < 15) {
          return true;
        }
      });
    } else if (rangePrice === "15_20") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 15 && price < 20) {
          return true;
        }
      });
    } else if (rangePrice === "20_100") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 20 && price < 100) {
          return true;
        }
      });
    } else {
      temp_ = temp;
    }
  } else {
    temp = phones;
    if (rangePrice === "10_12") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 10 && price < 12) {
          return true;
        }
      });
    } else if (rangePrice === "12_15") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 12 && price < 15) {
          return true;
        }
      });
    } else if (rangePrice === "15_20") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 15 && price < 20) {
          return true;
        }
      });
    } else if (rangePrice === "20_100") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 20 && price < 100) {
          return true;
        }
      });
    } else {
      temp_ = temp;
    }
  }
  if (rangePrice) {
    temp = temp_;
  } else {
    temp = temp;
  }

  const totalPages = Math.ceil(temp.length / phonesPerPage);
  const pages = [...Array(totalPages + 1).keys()].slice(1);
  const indexOfLastPage = currentPage * phonesPerPage;
  const indexOfFirstPage = indexOfLastPage - phonesPerPage;

  const visiblePhones = temp.slice(indexOfFirstPage, indexOfLastPage);
  const handlePrev = () => {
    if (currentPage !== 1) {
      dispatch(productAction.onNavigatePrev());
    }
  };
  const handleNext = () => {
    if (currentPage !== totalPages) {
      dispatch(productAction.onNavigateNext());
    }
  };
  const handleCurrentPage = (_p) => {
    dispatch(productAction.onClickCurentPage(_p));
  };
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <ul className="p-0 pt-2 m-0 flex  justify-center ">
            {imgs.map((img, index) => {
              if (index <= 7) {
                return (
                  <li
                    className={clsx(
                      styles.item,
                      "list-none p-2 m-px mx-3.5 my-1.5 border rounded shadow-md "
                    )}
                    key={index}
                  >
                    <img src={img} alt="This is a image" />
                  </li>
                );
              }
            })}
          </ul>
        </Carousel.Item>
        <Carousel.Item>
          <ul className="p-0 pt-2 m-0 flex  justify-center ">
            {imgs.map((img, index) => {
              if (index >= 1 && index <= 8) {
                return (
                  <li
                    className={clsx(
                      styles.item,
                      "list-none p-2 m-px mx-3.5 my-1.5 border rounded shadow-md "
                    )}
                    key={index}
                  >
                    <img src={img} alt="This is a image" />
                  </li>
                );
              }
            })}
          </ul>
        </Carousel.Item>
        <Carousel.Item>
          <ul className="p-0 pt-2 m-0 flex  justify-center ">
            {imgs.map((img, index) => {
              if (index >= 2 && index <= 9) {
                return (
                  <li
                    className={clsx(
                      styles.item,
                      "list-none p-2 m-px mx-3.5 my-1.5 border rounded shadow-md "
                    )}
                    key={index}
                  >
                    <img src={img} alt="This is a image" />
                  </li>
                );
              }
            })}
          </ul>
        </Carousel.Item>
        <Carousel.Item>
          <ul className="p-0 pt-2 m-0 flex  justify-center ">
            {imgs.map((img, index) => {
              if (index >= 3 && index <= 10) {
                return (
                  <li
                    className={clsx(
                      styles.item,
                      "list-none p-2 m-px mx-3.5 my-1.5 border rounded shadow-md "
                    )}
                    key={index}
                  >
                    <img src={img} alt="This is a image" />
                  </li>
                );
              }
            })}
          </ul>
        </Carousel.Item>
        <Carousel.Item>
          <ul className="p-0 pt-2 m-0 flex  justify-center ">
            {imgs.map((img, index) => {
              if (index >= 4 && index <= 11) {
                return (
                  <li
                    className={clsx(
                      styles.item,
                      "list-none p-2 m-px mx-3.5 my-1.5 border rounded shadow-md "
                    )}
                    key={index}
                  >
                    <img src={img} alt="This is a image" />
                  </li>
                );
              }
            })}
          </ul>
        </Carousel.Item>
        <Carousel.Item>
          <ul className="p-0 pt-2 m-0 flex  justify-center ">
            {imgs.map((img, index) => {
              if (index >= 5 && index <= 12) {
                return (
                  <li
                    className={clsx(
                      styles.item,
                      "list-none p-2 m-px mx-3.5 my-1.5 border rounded shadow-md "
                    )}
                    key={index}
                  >
                    <img src={img} alt="This is a image" />
                  </li>
                );
              }
            })}
          </ul>
        </Carousel.Item>
        <Carousel.Item>
          <ul className="p-0 pt-2 m-0 flex  justify-center ">
            {imgs.map((img, index) => {
              if (index >= 6 && index <= 13) {
                return (
                  <li
                    className={clsx(
                      styles.item,
                      "list-none p-2 m-px mx-3.5 my-1.5 border rounded shadow-md "
                    )}
                    key={index}
                  >
                    <img src={img} alt="This is a image" />
                  </li>
                );
              }
            })}
          </ul>
        </Carousel.Item>
        <Carousel.Item>
          <ul className="p-0 pt-2 m-0 flex  justify-center ">
            {imgs.map((img, index) => {
              if (index >= 7 && index <= 14) {
                return (
                  <li
                    className={clsx(
                      styles.item,
                      "list-none p-2 m-px mx-3.5 my-1.5 border rounded shadow-md "
                    )}
                    key={index}
                  >
                    <img src={img} alt="This is a image" />
                  </li>
                );
              }
            })}
          </ul>
        </Carousel.Item>
        <Carousel.Item>
          <ul className="p-0 pt-2 m-0 flex  justify-center ">
            {imgs.map((img, index) => {
              if (index >= 8 && index <= 15) {
                return (
                  <li
                    className={clsx(
                      styles.item,
                      "list-none p-2 m-px mx-3.5 my-1.5 border rounded shadow-md "
                    )}
                    key={index}
                  >
                    <img src={img} alt="This is a image" />
                  </li>
                );
              }
            })}
          </ul>
        </Carousel.Item>
      </Carousel>
      <Breadcrumb className="mt-2">
        <Breadcrumb.Item>
          <Link to="/" className="no-underline">
            <i className="fa-solid fa-house mr-1"></i>Home
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item onClick={() => setRangePrice("")}>
          <Link to="/phones">Điện thoại</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Apple</Breadcrumb.Item>
      </Breadcrumb>
      <div className={clsx(styles.filter, "flex justify-evenly ")}>
        <p>Lọc danh sách: </p>
        <ul className="flex justify-evenly m-0">
          <li>
            {category ? (
              <div onClick={() => setCategory("")}>
                <i
                  class="fa-solid fa-circle-minus"
                  style={{ color: "#ff3333" }}
                ></i>
                <span
                  style={{ color: "#d10000", fontSize: "15px" }}
                  className="ml-1"
                >
                 Danh mục:
                </span>
                <span style={{ fontSize: "16px" }} className="font-bold ml-1">
                  {category}
                </span>
              </div>
            ) : (
              <div>
                <span>Danh mục</span>
                <i className="fa-solid fa-chevron-down"></i>
              </div>
            )}
            <ul className={clsx(styles.subCategory, "p-0")}>
              <li>
                <ul className="p-0">
                  <li onClick={() => setCategory("iPhone11Sr")}>
                    iPhone 11 series
                  </li>
                </ul>
              </li>
              <li>
                <ul className="p-0">
                  <li onClick={() => setCategory("iPhone12Sr")}>
                    iPhone 12 series
                  </li>
                </ul>
              </li>
              <li>
                <ul className="p-0">
                  <li onClick={() => setCategory("iPhone13Sr")}>
                    iPhone 13 series
                  </li>
                </ul>
              </li>
              <li>
                <ul className="p-0">
                  <li onClick={() => setCategory("iPhone14Sr")}>
                    iPhone 14 series
                  </li>
                </ul>
              </li>
              <li>
                <ul className="p-0">
                  <li onClick={() => setCategory("iPhone15Sr")}>
                    iPhone 15 series
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            {rangePrice ? (
              <div onClick={() => setRangePrice("")}>
                <i
                  class="fa-solid fa-circle-minus"
                  style={{ color: "#ff3333" }}
                ></i>
                <span
                  style={{ color: "#d10000", fontSize: "15px" }}
                  className="ml-1"
                >
                  Giá:
                </span>
                <span style={{ fontSize: "16px" }} className="font-bold ml-1">
                  {rangePrice}
                </span>
              </div>
            ) : (
              <div>
                <span>Giá</span>
                <i className="fa-solid fa-chevron-down"></i>
              </div>
            )}
            <ul className={clsx(styles.subPrice, "p-0")}>
              <li>
                <ul className="p-0">
                  <li onClick={() => setRangePrice("10_12")}>
                    10 đến 12 triệu ({count10_12})
                  </li>
                </ul>
              </li>
              <li>
                <ul className="p-0">
                  <li onClick={() => setRangePrice("12_15")}>
                    12 đến 15 triệu ({count12_15})
                  </li>
                </ul>
              </li>
              <li>
                <ul className="p-0">
                  <li onClick={() => setRangePrice("15_20")}>
                    15 đến 20 triệu ({count15_20})
                  </li>
                </ul>
              </li>
              <li>
                <ul className="p-0">
                  <li onClick={() => setRangePrice("20_100")}>
                    20 đến 100 triệu ({count20_100})
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <div>
              <span>Bluetooth</span>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </li>
          <li>
            <div>
              <span>Độ phân giải</span>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </li>
          <li>
            <div>
              <span>Kích thước màn hình</span>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </li>
          <li>
            <div>
              <span>RAM</span>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </li>
          <li>
            <div>
              <span>Sắp xếp</span>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </li>
        </ul>
      </div>
      <h4 className="mt-2">iPhone</h4>
      <ul className="p-0 pt-2 m-0 flex flex-wrap justify-evenly">
        {visiblePhones.map((element) => {
          if (element.type === "phone") {
            return (
              <li
                className={clsx(
                  styles.item,
                  "list-none p-2 m-px my-1.5 border rounded shadow-md "
                )}
                key={element.id}
              >
                <img src={element.image} alt="This is a image" />
                <p>{element.model}</p>
                <p>{element.price} ₫</p>
              </li>
            );
          }
        })}
      </ul>
      <Pagination
        style={{ display: "flex", justifyContent: "center" }}
        className="mt-2"
      >
        <Pagination.Prev onClick={handlePrev} />
        {pages.map((_p) => (
          <Pagination.Item
            key={_p}
            active={_p === currentPage}
            onClick={() => handleCurrentPage(_p)}
          >
            {_p}
          </Pagination.Item>
        ))}

        <Pagination.Next onClick={handleNext} />
      </Pagination>
    </div>
  );
}

export default Apple;
