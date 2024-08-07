import React, { useEffect } from "react";
import loginImage from "../../assets/images/loginSvg.svg";
import styles from "./login.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, getAllUsersAction, loginUserWithGoogle } from "../../store/Slices/usersSlice";
import { toast } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../../contexts/authContext";
import { GoRows } from "react-icons/go";
import { jwtDecode } from "jwt-decode";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allUsers = useSelector((state) => state.users.users);
  const { login } = useAuth();
  useEffect(() => {
    dispatch(getAllUsersAction());
  }, [dispatch]);

  const signIn = async (values) => {
    try {
      const isUserFind = allUsers.find((user) => user.email === values.email);
      console.log(allUsers);
      console.log(isUserFind);
      if (!isUserFind) {
        toast.error("Email Not Found");
      } else {
        const res = await dispatch(loginUser(values));
        if (res.payload && res.payload.token) {
          login(res.payload.token, res.payload.user);
          console.log("Token receivedddddddddddddd", res.payload.token);
          navigate("/jobs");
        } else {
          toast.error("Login failed. Please check your credentials.");
        }
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error("Error during sign-in process:", error);
    }
  };


  const handleGoogleLogin = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);

      const User = {
        email: decoded.email,
      };
      const isUserFind = allUsers.find((user) => user.email === User.email);
   
      if (!isUserFind) {
        toast.error("Email Not Found");
      } else {
        const res = await dispatch(loginUserWithGoogle(User));
        if (res.payload && res.payload.token) {
          login(res.payload.token,
            res.payload.user)
          console.log("Token receivedddddddddddddddddddd", res.payload.token, [
            res.payload.user,
            decoded,
          ]);
          navigate("/home");
        } else {
          toast.error("Login failed. Please check your credentials.");
        }
      }
    } catch (error) {
      console.log("Login Failed:", error);
      toast.error("An error occurred during Google login. Please try again.");
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
            <div className={styles.loginSec}>
              <div className="leftTitle text-center my-5">
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

                <div className="form-group input-component mt-4 position-relative">
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
                    <span className="text-danger">
                      {formik.errors.password}
                    </span>
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
              <div className="d-flex justify-content-between align-items-center">
                <p className="d-flex mt-2">
                  Don't have an account?
                  <NavLink
                    to="/signUp"
                    className="text-success text-decoration-none"
                  >
                    Sign Up
                  </NavLink>
                </p>
                <NavLink
                  to="/endemailtoforgetpass"
                  className="text-success text-decoration-none"
                >
                  Forget Password?
                </NavLink>
              </div>

              <div className="d-flex justify-content-center align-items-center">
                <div className={styles.line}></div>
                <span className="p-2 bg-white">or</span>
                <div className={styles.line}></div>
              </div>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  handleGoogleLogin(credentialResponse);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </div>
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
