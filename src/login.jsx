import React, { useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./login.css";
import { CarouselLogin } from "./carousel";
import {
  getAuth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { auth } from "./api-firebase/firebase-config";
import OTPInput, { ResendOTP } from "otp-input-react";
// import Spinner from "react-bootstrap/Spinner";
// import { toast } from "react-toastify";
import { UserData } from "./state_manager";
// import "react-toastify/dist/ReactToastify.css";
import { AppContext } from "./App";
export const Login = (props) => {
  const [number, setNumber] = useState();
  const [otp, setOTP] = useState();
  const { setTest } = useContext(AppContext);

  const showToastMessage = () => {
    toast.success("Logged In !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const navigate = useNavigate();
  async function sendNumber() {
    var numberSliced = String(number).slice(3);
    // console.log("Sliced Number : " + numberSliced);
    // props.setUserNumber(numberSliced);
    props.userNumber1.current = numberSliced;
    // UserData.number = numberSliced;
    setTest(numberSliced);
    console.log("In Login : " + props.userNumber1.current);
    // console.log("USER NUMBER IN LOGIN : " + props.userNumber1.current);
    // await fetch(
    //   "http://15.206.187.61:443/setNumber?number=" + numberSliced
    // ).then((res) => {
    //   // console.log("Number Sent...." + res);
    // });
    // navigate("/loggedIn");
    // navigate("/loggedIn");
    // console.log("Send Number Function Is called");
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
    // console.log("Number : " + typeof number);
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
        // console.log("OTP Verified");
        // toast.success("Login successful");
        props.showToastMessage();
        navigate("/yourCompanies");
        // showToastMessage();
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
    console.log("By Passing OTP...");
    props.showToastMessage();
    navigate("/yourCompanies");
  }

  return (
    <div className="background-login">
      <ToastContainer />
      <div className="left-upper-login">
        <div className="left-side-login">
          <input type="radio" name="position" checked />
          <input type="radio" name="position" />
          <input type="radio" name="position" />
          <input type="radio" name="position" />
          <input type="radio" name="position" />
          <main id="carousel">
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
          </main>
        </div>
      </div>
      <div className="container-login">
        {/* <img
          src="D://Autotekk/Tauri-App-V1/src/autotekk_logo.jpeg"
          id="logo"
        ></img> */}
        <div className="company-logo-name">
          <div className="logoV-login"></div>
          <h5 className="h5-login">AUTOTEKK</h5>
        </div>

        {/* <p>We will send you a One Time Password (OTP)</p> */}
        <form className="form-login">
          <div className="input-btn-login">
            <div className="heading-one-login">
              <b>Let's Login now !</b>
            </div>

            <input
              type="tel"
              placeholder="Enter mobile number"
              id="mobile-login"
              className="input-setting-login"
              onChange={(e) => setNumber(e.target.value)}
            />
            <div className="heading-second-login">
              <div>Have a Refferal/Partner Code ?</div>
            </div>
            <button
              type="button"
              onClick={byPass}
              className="button-setting-login"
            >
              Send OTP
            </button>
          </div>
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
