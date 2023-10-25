import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import styles from "../styles/Login.module.css";
import image from "../../assets/images/logos/Logo.png";
import clsx from "clsx";

function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("Không để trống phần này!"),
      password: Yup.string().required("Không để trống phần này!"),
    }),
    onSubmit: async (values) => {
      try {
        const reponse = await axios.get("http://localhost:8000/users");
        let users = reponse.data;
        const user = users.find(
          (user) =>
            (user.userName === values.userName ||
              user.email === values.userName) &&
            user.password === values.password
        );
        if (user && values.userName !== "admin") {
          toast.success("Đăng nhập thành công!");
          navigate("/");
        } else if (user && values.userName === "admin") {
          toast.success("Đăng nhập thành công!");
          navigate("/admin");
        } else {
          toast.error("Đăng nhập thất bại!");
        }
      } catch (err) {
        console.error("Lỗi khi đăng nhập!");
      }
    },
  });
  return (
    <div className={styles.body}>
      <div className={clsx("container", styles.container)}>
        <h2>Login</h2>
        <div className={styles.items}>
          <div className={styles.rItem}>
            <img src={image} alt="This is a image" className={styles.image} />
            <p>
              <Link
                to="/register"
                className={clsx("text-sky-500 dark:text-sky-400", styles.p)}
              >
                Chưa có tài khoản
              </Link>
            </p>
          </div>
          <form className={styles.form} onSubmit={formik.handleSubmit}>
            <div className={styles.item}>
              <div className={clsx("mb-3", styles.mb3)}>
                <label
                  htmlFor="username"
                  className={clsx("form-label", styles.formLabel)}
                >
                  User Name:
                </label>
                <input
                  type="text"
                  className={clsx("form-control", styles.formControl)}
                  name="userName"
                  value={formik.values.userName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.userName && formik.errors.userName && (
                <div className={styles.alert} style={{ color: "red" }}>
                  {formik.errors.userName}
                </div>
              )}
            </div>
            <div className={styles.item}>
              <div className={clsx("mb-3", styles.mb3)}>
                <label
                  htmlFor="password"
                  className={clsx("form-label", styles.formLabel)}
                >
                  Password:
                </label>
                <input
                  type="password"
                  className={clsx("form-control", styles.formControl)}
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.password && formik.errors.password && (
                <div className={styles.alert} style={{ color: "red" }}>
                  {formik.errors.password}
                </div>
              )}
            </div>

            <button
              type="submit"
              className={clsx("btn btn-primary", styles.btn)}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
