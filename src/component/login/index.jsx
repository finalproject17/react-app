import React from "react";
import loginImage from "../../assets/images/loginSvg.svg";
import styles from "./login.module.css";
export default function Login() {
  return (
    <section className={styles.register}>
      <div className="container d-flex justify-content-between bg-body">
        <div className={`row ${styles.registerForm}`}>
          <div className={`${styles.sectionLeft} col-7   p-4`}>
            <div className="leftTitle text-center mb-5">
              <h2>Create Account</h2>
              <p>
                Search all the open positions on the web. Get your own
                personalized salary estimate. Read reviews on over 600,000
                companies worldwide.
              </p>
            </div>
            <form action="">
              <div className="nameInputs d-flex align-items-center justify-content-between ">
                <div className={`form-group position-relative input-component w-50 ${styles.inputWrapper}`}>
                  <label
                    htmlFor="f-name"
                    className={`position-absolute bg-white ${styles.label}`}
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="f-name"
                    id="f-name"
                    className="mb-4 form-control"
                  />
                </div>
                <div className={`form-group position-relative input-component w-50 `}>
                  <label
                    htmlFor="l-name"
                    className={`position-absolute bg-white ${styles.label}`}
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="l-name"
                    id="l-name"
                    className="mb-4 form-control"
                  />
                </div>
              </div>
              <div className="form-group position-relative input-component">
                <label
                  htmlFor="email"
                  className={`position-absolute bg-white ${styles.label_1}`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mb-4 form-control"
                />
              </div>
              <div className="form-group position-relative input-component ">
                <label
                  htmlFor="phone"
                  className={`position-absolute bg-white ${styles.label_1}`}
                >
                  Phone
                </label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  className="mb-4 form-control"
                />
              </div>
              <div className="form-group position-relative input-component ">
                <label
                  htmlFor="password"
                  className={`position-absolute bg-white ${styles.label_1}`}
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="mb-4 form-control"
                />
              </div>
              <div className="form-group position-relative input-component ">
                <label
                  htmlFor="rePassword"
                  className={`position-absolute bg-white ${styles.label_1}`}
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="rePassword"
                  id="rePassword"
                  className="mb-4 form-control"
                />
              </div>
              <button className="btn btn-success w-100 m-auto mb-3 mt-3 d-flex align-items-center justify-content-center">
                Next
              </button>
            </form>
            <p>
              Already have an account?
              <span className="text-success">Sign in</span>
            </p>
            <div className="d-flex justify-content-center align-items-center">
              <div className={styles.line}></div>
              <span className="p-2 bg-white">or</span>
              <div className={styles.line}></div>
            </div>
            <div className="pt-2 w-100 btn m-auto d-flex align-items-center justify-content-center btn-outline-success ">
              Github
            </div>
            <div className="pt-2 mt-2 w-100 btn m-auto d-flex align-items-center justify-content-center btn-outline-success ">
              Google
            </div>
          </div>

          <div className={`${styles.sectionRigth} col-5 `}>
            <div className="rigth-title">
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
