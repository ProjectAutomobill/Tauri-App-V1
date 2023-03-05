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
import { redirect, useNavigate } from "react-router-dom";
import { auth } from "./api-firebase/firebase-config";
import OTPInput, { ResendOTP } from "otp-input-react";

export const Login = () => {
  const [number, setNumber] = useState();
  const [otp, setOTP] = useState();

  const navigate = useNavigate();
  async function sendNumber() {
    await fetch("/setNumber?number=" + number);
    // navigate("/loggedIn");
    console.log("Send Number Function Is called");
    document.getElementById("otp-container-id").style.display = "block";
  }

  function onCaptchaVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
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
    console.log("Number : " + number);
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

        navigate("/loggedIn");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <div className="background"></div>
      <div className="container">
        {/* <img
          src="D://Autotekk/Tauri-App-V1/src/autotekk_logo.jpeg"
          id="logo"
        ></img> */}
        <div className="logoV"></div>
        <h5>Autotekk</h5>

        {/* <p>We will send you a One Time Password (OTP)</p> */}
        <form>
          <input
            type="tel"
            placeholder="Enter mobile number"
            id="mobile"
            onChange={(e) => setNumber(e.target.value)}
          />
          <button type="button" onClick={login}>
            Send OTP
          </button>
        </form>
        <div className="otp-container" id="otp-container-id">
          <p>Enter OTP:</p>
          {/* <input
            type="number"
            id="otp"
            onChange={(e) => setOTP(e.target.value)}
          /> */}
          <OTPInput
            className="otp-input"
            value={otp}
            onChange={setOTP}
            autoFocus
            OTPLength={6}
            otpType="number"
            disabled={false}
            secure
          />
          <br />
          <button type="button" onClick={verifyOTP}>
            Verify OTP
          </button>
          <div id="recaptcha-container"></div>
        </div>
      </div>
      {/* <script src="script.js"></script> */}
    </div>
  );
};
