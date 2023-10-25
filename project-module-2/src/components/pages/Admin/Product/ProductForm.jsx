import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { postProducts, putProducts } from "../../../../redux/productSlice";
import styles from "../../../styles/ProductForm.module.css";

function ProductForm(props, { selectProduct }) {
  const [inputForm, setInputForm] = useState({
    id: 0,
    brand: "",
    model: "",
    price: "",
    image: [],
    saling: false,
    type: "",
  });
  const { brand, model, price, image, saling, type } = inputForm;

  const dispatch = useDispatch();

  const [images, setImages] = useState([]);
  // const [imgDatas, setImgDatas] = useState([]);
  //   const [disabled, setDisabled] = useState(false);

  const handleChangeInput = (e) => {
    // console.log(file.target.files[0].name);
    // setDisabled(c);

    // setImages(e.target.files);
    setInputForm({ ...inputForm, [e.target.name]: e.target.value });
    // [...images].map((f) => {
    //   setImgDatas(URL.createObjectURL(f));
    // });
    // data();
  };
  //   const data = () =>{
  //     [...images].map((image) => {
  //         setImgDatas(...imgDatas,URL.createObjectURL(image))
  //     })
  //   }
  //   console.log(images);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (selectProduct) {
      dispatch(putProducts({ inputForm, id: selectProduct.id }));
    } else {
      dispatch(postProducts(inputForm));
    }
    setInputForm({
      brand: "",
      model: "",
      price: "",
      image: [],
      saling: false,
      type: "",
    });
  };

  useEffect(() => {
    if (selectProduct) {
      setInputForm({
        brand: selectProduct.brand,
        model: selectProduct.model,
        price: selectProduct.price,
        image: selectProduct.image,
        saling: selectProduct.saling,
        type: selectProduct.type,
      });
    }
  }, [selectProduct]);

  //   const onChange = (checked) => {
  //     setDisabled(checked);
  //   };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmitForm} className={styles.form}>
          <div>
            <label>Brand: </label>
            <input
              type="text"
              name="brand"
              value={brand}
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <label>Name: </label>
            <input
              type="text"
              name="model"
              value={model}
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <label>Price: </label>
            <input
              type="text"
              name="price"
              value={price}
              onChange={handleChangeInput}
            />
          </div>

          {/* <label>Saling:</label>
            <Switch
              size="small"
              checked={disabled}
              name="saling"
              value={saling}
              onChange={handleChangeInput}
            />
            <br /> */}
          <div>
            <label>Type:</label>
            <input
              type="text"
              name="type"
              value={type}
              onChange={handleChangeInput}
            />
          </div>

          <label>Image:</label>
          <input
            type="file"
            name="image"
            multiple
            accept="image/*"
            value={image}
            onChange={handleChangeInput}
          />
          <div className="flex mt-2">
            {[...images].map((image) => (
              <div className="mr-2">
                <img
                  src={URL.createObjectURL(image)}
                  className="w-20 h-20 flex"
                />
              </div>
            ))}
          </div>
          <br />
          <button type="submit">
            {selectProduct ? "Update Product" : "Add Product"}
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default ProductForm;
