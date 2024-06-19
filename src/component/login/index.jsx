// import React from "react";
import loginImage from "../../assets/images/loginSvg.svg";
import styles from "./login.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllUsersAction, loginUser } from "../../store/Slices/usersSlice";
import { toast } from "react-toastify";
import bcrypt from "bcryptjs";
// import { useFormContext } from "../../contexts/RegisterFormContext";
// import { useState } from "react";
// import { toast } from "react-toastify";
// import GoogleRegister from "../GoogleRegister";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";



import { useAuth } from "../../contexts/authContext";
export default function Login() {
  const { isLoggedIn, login, logout } = useAuth();

  const navigate = useNavigate();
  const allUsers = useSelector((state) => state.users.users);
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(getAllUsersAction())
  }, [Dispatch]);

const signIn = async (val) => {
  // try {
    // const hashedPassword =await  bcrypt.hash(val.password);
    const isUserFind = allUsers.find((user) => user.email === val.email);

    if (!isUserFind) {
      toast.error("Email Not Found");
  }
    else {
      Dispatch(loginUser(val)).then((res) => {
        // const token = res.payload.token;
        const token =" res.payload.token"
        login(token);
        // console.log(res.payload.token);
        // console.log(res);
         navigate("/home");
      })
  }
   // else {
      // const isMatch = await bcrypt.compare(hashedPassword, isUserFind.password);
      //  const isMatch =  bcrypt.compareSync(
      //    isUserFind.password,
      //    val.password
      //  ); 
      // if (!isMatch) {
      //   toast.error("Invalid Email or Password");
      //   console.log(isMatch,isUserFind.password,hashedPassword);
      // } else {
        // User found and password matches
        // Proceed with login
        // Dispatch(loginUser(val)).then((res) => {
        //   console.log(res.payload.token);
        //   console.log(res);
        // });
        // navigate("/home");
      //}
  //   }
  // } catch (error) {
  //   console.error("Error during sign-in process:", error);
  //   toast.error("An error occurred. Please try again.");
  // }
  
};







  const validationSchema = Yup.object({
    email: Yup.string()
      .required("The email is required")
      .email("Please enter a valid email"),
    password: Yup.string()
      .required("The password is required")
      .min(8, "Minimum length should be 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
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
              <h2>Create Account</h2>
              <p>
                Search all the open positions on the web. Get your own
                personalized salary estimate. Read reviews on over 600,000
                companies worldwide.
              </p>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group position-relative input-component mt-4">
                <div className="position-relative">
                  <label
                    htmlFor="email"
                    className={`position-absolute bg-white ${styles.label}`}
                  >
                    Email Adress
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
                </div>
                <div>
                  {formik.errors.email && formik.touched.email ? (
                    <span className="text-danger p-0 m-0">
                      {formik.errors.email}
                    </span>
                  ) : (
                    <span className=" opacity-0">. </span>
                  )}
                </div>
              </div>

              <div className="form-group input-component mt-4">
                <div className="position-relative">
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
                    className={`mt-4 form-control `}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                  />
                </div>

                <div>
                  {formik.errors.password && formik.touched.password ? (
                    <span className="text-danger p-0 m-0">
                      {formik.errors.password}
                    </span>
                  ) : (
                    <span className=" opacity-0">. </span>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-success w-100 m-auto mb-3 mt-3 d-flex align-items-center justify-content-center"
              >
                login
              </button>
            </form>
            <p>
              Don't have an account?
              <NavLink
                to="/signUp"
                className="text-success text-decoration-none"
              >
                <span>Sign Up</span>
              </NavLink>
            </p>
            <div className="d-flex justify-content-center align-items-center">
              <div className={styles.line}></div>
              <span className="p-2 bg-white">or</span>
              <div className={styles.line}></div>
            </div>
            {/* <div className="pt-2 w-100 btn m-auto d-flex align-items-center justify-content-center btn-outline-success ">
              Github
            </div> */}
            {/* <div className="pt-2 mt-2 w-100 btn m-auto d-flex align-items-center justify-content-center btn-outline-success "> */}
              <GoogleLogin
              onSuccess={(credentialResponse) => {
                const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
                console.log(credentialResponse);
                console.log(credentialResponseDecoded);
                
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
              
            {/* </div> */}
          </div>

          <div className={`${styles.sectionRigth} col-5 `}>
            <div className="rigth-title mt-4">
              <h2>Get The Right Job You Deserve</h2>
            </div>
            <div className="rigth-img">
              <img src={loginImage} alt="login Imge" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
