import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { requestOTP, verifyOTP, resetPassword } from "../../store/Slices/usersSlice";
import styles from "./SendEmailToForgetPassword.module.css";

const SendEmailToForgetPassword = () => {
  const dispatch = useDispatch();
  const { loading, error, otpVerified } = useSelector((state) => state.users);
  const [email, setEmail] = useState("");
  const [OTP, setOTP] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showOTPInput, setShowOTPInput] = useState(false);
  const [showNewPasswordInput, setShowNewPasswordInput] = useState(false);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const validateOTP = (otp) => {
    const re = /^\d{6}$/;
    return re.test(otp);
  };




  const validatePassword = (password) => {
    const re =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  };
  


  const handleRequestOTP = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setMessage("Invalid email format");
      return;
    }
    try {
      await dispatch(requestOTP({ email })).unwrap();
      setMessage("Code has been sent to your email");
      setShowOTPInput(true);
    } catch (err) {
      console.error("Failed to request OTP:", err);
      setMessage("Failed to request code");
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    if (!validateOTP(OTP)) {
      setMessage("Invalid OTP format");
      return;
    }
    try {
      await dispatch(verifyOTP({ otp: OTP, email })).unwrap();
      setMessage("OTP verified successfully");
      setShowNewPasswordInput(true);
    } catch (err) {
      console.error("Failed to verify OTP:", err);
      setMessage("Failed to verify OTP: " + err.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!validatePassword(newPassword)) {
      setMessage("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character");
      return;
    }
    try {
      await dispatch(resetPassword({ email, newPassword })).unwrap();
      setMessage("Password reset successful");
      navigate("/login");
    } catch (err) {
      console.error("Failed to reset password:", err);
      setMessage("Failed to reset password");
    }
  };

  return (
    <Container fluid>
      <Row>
        <div className="d-flex justify-content-center">
          <Col md={6}>
            <h4 className="mt-4 mb-5">Forget Password</h4>
            <Form
              className={`m-auto col-12 ${styles.formContainer}`}
              onSubmit={
                showNewPasswordInput
                  ? handleResetPassword
                  : showOTPInput
                  ? handleVerifyOTP
                  : handleRequestOTP
              }
            >
              <Form.Group className="mb-4 position-relative">
                <Form.Label
                  className={`position-absolute bg-white ${styles.inputLabel}`}
                  column
                  sm={2}
                >
                  Email
                </Form.Label>
                <Col sm={6}>
                  <Form.Control
                    className={`${styles.jobSeekerInput} ${styles.inputField}`}
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Please write your email"
                    required
                  />
                </Col>
              </Form.Group>
              {showOTPInput && (
                <Form.Group className="mb-4 position-relative">
                  <Form.Label
                    className={`position-absolute bg-white ${styles.inputLabel}`}
                    column
                    sm={2}
                  >
                    code
                  </Form.Label>
                  <Col sm={6}>
                    <Form.Control
                      className={`${styles.jobSeekerInput} ${styles.inputField}`}
                      name="otp"
                      value={OTP}
                      onChange={(e) => setOTP(e.target.value)}
                      placeholder="Please write your code"
                      required
                    />
                  </Col>
                </Form.Group>
              )}
              {showNewPasswordInput && otpVerified && (
                <Form.Group className="mb-4 position-relative">
                  <Form.Label
                    className={`position-absolute bg-white ${styles.inputLabel}`}
                    column
                    sm={2}
                  >
                    New Password
                  </Form.Label>
                  <Col sm={6}>
                    <Form.Control
                      type="password"
                      className={`${styles.jobSeekerInput} ${styles.inputField}`}
                      name="newPassword"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Enter your new password"
                      required
                    />
                  </Col>
                </Form.Group>
              )}
              <div className="">
                <Button variant="success" type="submit" disabled={loading}>
                  {loading
                    ? "sending..."
                    : showNewPasswordInput
                    ? "Reset Password"
                    : showOTPInput
                    ? "Verify code"
                    : "send code"}
                </Button>
              </div>
              {message && (
                <p className=" mt-3">
                  {message}
                </p>
              )}
            </Form>
          </Col>
        </div>
      </Row>
    </Container>
  );
}

export default SendEmailToForgetPassword;
