import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./login.css";
import { CarouselLogin } from "./carousel";
import {
  getAuth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";
import { useState } from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { auth } from "./api-firebase/firebase-config";
import OTPInput, { ResendOTP } from "otp-input-react";
// import Spinner from "react-bootstrap/Spinner";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Login = (props) => {
  const [number, setNumber] = useState();
  const [otp, setOTP] = useState();

  const navigate = useNavigate();
  async function sendNumber() {
    var numberSliced = String(number).slice(3);
    console.log("Sliced Number : " + numberSliced);
    props.setUserNumber(numberSliced);
    props.userNumber1.current = numberSliced;
    console.log("USER NUMBER IN LOGIN : " + props.userNumber);
    await fetch("/setNumber?number=" + numberSliced).then((res) => {
      console.log("Number Sent...." + res);
    });
    // navigate("/loggedIn");
    // navigate("/loggedIn");
    console.log("Send Number Function Is called");
    document.getElementById("otp-container-id-login").style.display = "block";
  }

  function onCaptchaVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container-login",
        {
          size: "invisible",
          callback: (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            // ...
            Login();
          },
          "expired-callback": () => {
            // Response expired. Ask user to solve reCAPTCHA again.
            // ...
          },
        },
        auth
      );
    } else {
      window.recaptchaVerifier.render().then((widgetId) => {
        window.recaptchaVerifier.reset(widgetId);
      });
    }
  }

  function login() {
    onCaptchaVerify();
    const appVerifier = window.recaptchaVerifier;
    console.log("Number : " + typeof number);
    signInWithPhoneNumber(auth, number, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        sendNumber();
        // window.recaptchaVerifier.render().then(function (widgetId) {
        //   grecaptcha.reset(widgetId);
        // });
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log(error);
      });
  }

  function verifyOTP() {
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log("OTP Verified");
        toast.success("Login successful");
        navigate("/yourCompanies");
        // {
        //   <Navigate to="/yourCompanies" state={{ number }} />;
        // }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function byPass() {
    sendNumber();
    navigate("/yourCompanies");
  }

  return (
    <div>
      <div className="background-login"></div>
      <div className="container-login">
        {/* <img
          src="D://Autotekk/Tauri-App-V1/src/autotekk_logo.jpeg"
          id="logo"
        ></img> */}
        <div className="logoV-login"></div>
        <h5 className="h5-login">Autotekk</h5>

        {/* <p>We will send you a One Time Password (OTP)</p> */}
        <form className="form-login">
          <input
            type="tel"
            placeholder="Enter mobile number"
            id="mobile-login"
            className="input-setting-login"
            onChange={(e) => setNumber(e.target.value)}
          />
          <button
            type="button"
            onClick={byPass}
            className="button-setting-login"
          >
            Send OTP
          </button>
        </form>
        <div className="otp-container-login" id="otp-container-id-login">
          <p>Enter OTP:</p>
          {/* <input
            type="number"
            id="otp"
            onChange={(e) => setOTP(e.target.value)}
          /> */}
          <OTPInput
            className="otp-input-login"
            value={otp}
            onChange={setOTP}
            autoFocus
            OTPLength={6}
            otpType="number"
            disabled={false}
            secure
          />
          <br />
          <button
            type="button"
            className="button-setting-login"
            onClick={verifyOTP}
          >
            Verify OTP
          </button>
          <div id="recaptcha-container-login"></div>
        </div>
      </div>
      {/* <script src="script.js"></script> */}
    </div>
  );
};
