// src/components/SignUp.js
import React, { useState } from "react";
import SignUpStepOne from "../signupStepOne/index";
import SignUpStepTwo from "../signupStepTow/index";
import { useFormContext } from "../../contexts/RegisterFormContext";

const SignUp = () => {
  const { currentStep } = useFormContext();
   const steps = [<SignUpStepOne />, <SignUpStepTwo />];
  return (
    <>{steps[currentStep]}</>
  );
};

export default SignUp;
