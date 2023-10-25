import React, { useEffect } from "react";
import styles from "../styles/Article.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/productSlice";
import Carousel from "../others/Carousel";
import Spin from "../others/Spin";

function Article() {
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  // console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (status === "Loading") {
    return (
      <div style={{ fontSize: "30px", textAlign: "center", marginTop: "50px" }}>
        <Spin />
      </div>
    );
  }
  return (
    <div style={{ backgroundColor: "#fafafa" }}>
      <Carousel />
      <div className={styles.flashSale}></div>
      <div
        className={clsx(styles.phone, styles.appleReseller, "rounded mt-3.5")}
      >
        <div className="inline-block rounded-tl-lg">
          APPLE AUTHORISED RESELLER
        </div>
        <ul className="p-0 pt-2 m-0 flex flex-wrap justify-evenly">
          {products.map((element) => {
            if (element.brand === "Apple" && element.saling && element.type==="phone") {
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
                  <p>{element.price}</p>
                </li>
              );
            }
          })}
        </ul>
      </div>
      <div
        className={clsx(styles.phone, styles.prominentPhone, "rounded mt-3.5")}
      >
        <div className="flex justify-between">
          <div className="inline-block rounded-tl-lg">ĐIỆN THOẠI NỔI BẬT</div>
          <ul className="flex justify-evenly p-0 m-0">
            <li>Iphone 15</li>
            <li>TECNO POVA 5</li>
            <li>Redmi Note 12</li>
            <li>Samsung Galaxy S23</li>
            <li>Xem tất cả</li>
          </ul>
        </div>
        <ul className="p-0 pt-2 m-0 flex flex-wrap justify-evenly">
          {products.map((element) => {
            if (element.saling && element.type==="phone") {
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
                  <p>{element.price}</p>
                </li>
              );
            }
          })}
        </ul>
      </div>
      <div className={clsx(styles.prominentSpeakersHeadphones, "rounded mt-3.5")}>
        <div className="inline-block rounded-tl-lg">
          LOA - TAI NGHE NỔI BẬT
        </div>  
      </div>
      <div className={styles.iPhoneBatteryReplacementAndRepair}></div>
      <div className={styles.accessory}></div>
      <div className={styles.technologyNews}></div>
      <div className={styles.customerOfThaiLinh}></div>
    </div>
  );
}

export default Article;
