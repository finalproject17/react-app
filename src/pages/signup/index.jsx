// src/components/SignUp.js
import React, { useContext, useState } from "react";
import SignUpStepOne from "../../component/signupStepOne/index";
import SignUpStepTwo from "../../component/signupStepTow/index";
import { RegisterFormContext } from "../../contexts/RegisterFormContext";
// import { useFormContext } from "../../contexts/RegisterFormContext";

const SignUp = () => {
  const { currentStep } = useContext(RegisterFormContext);
   const steps = [<SignUpStepOne />, <SignUpStepTwo />];
  return (
    <>{steps[currentStep]}</>
  );
};

export default SignUp;
