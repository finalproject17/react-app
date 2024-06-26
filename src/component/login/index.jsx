import React, { useEffect } from "react";
import loginImage from "../../assets/images/loginSvg.svg";
import styles from "./login.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, getAllUsersAction } from "../../store/Slices/usersSlice";
import { toast } from "react-toastify";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allUsers = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(getAllUsersAction()); 
  }, [dispatch]);

  const signIn = async (values) => {
    try {
      const { email, password } = values;

      
      const isUserFind = allUsers.find((user) => user.email === email);

      if (!isUserFind) {
        toast.error("Email Not Found");
      } else {
     
        const res = await dispatch(loginUser({ email, password }));
      
        if (res.payload && res.payload.token) {
          localStorage.setItem("token", res.payload.token); 
          navigate("/home"); 
        } else {
          toast.error("Login failed. Please check your credentials."); 
        }
      }
    } catch (error) {
      console.error("Error during sign-in process:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("The email is required")
      .email("Please enter a valid email"),
    password: Yup.string()
      .required("The password is required")
      .min(8, "Minimum length should be 8 characters"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: signIn,
  });

  return (
    <section className={styles.register}>
      <div className={`container ${styles.loginConain}`}>
        <div className={`row ${styles.registerForm}`}>
          <div className={`${styles.sectionLeft} col-7 p-4`}>
            <div className="leftTitle text-center mb-5">
              <h2>Login to Your Account</h2>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group position-relative input-component mt-4">
                <label
                  htmlFor="email"
                  className={`position-absolute bg-white ${styles.label}`}
                >
                  Email Address
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="mt-4 form-control"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email && (
                  <span className="text-danger">{formik.errors.email}</span>
                )}
              </div>

              <div className="form-group input-component mt-4">
                <label
                  htmlFor="password"
                  className={`position-absolute bg-white ${styles.label}`}
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="mt-4 form-control"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.password && formik.touched.password && (
                  <span className="text-danger">{formik.errors.password}</span>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-success w-100 mt-3"
                disabled={formik.isSubmitting}
              >
                Login
              </button>
            </form>

            <p>
              Don't have an account?
              <NavLink
                to="/signUp"
                className="text-success text-decoration-none"
              >
                Sign Up
              </NavLink>
            </p>
          </div>

          <div className={`${styles.sectionRigth} col-5 `}>
            <div className="rigth-title mt-4">
              <h2>Get The Right Job You Deserve</h2>
            </div>
            <div className="rigth-img">
              <img src={loginImage} alt="login Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
