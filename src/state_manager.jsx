// import React from "react";
// import { useRef, useState } from "react";

// export function State_Manager() {
//   //   const number = useRef();
//   //   const company = useRef();
//   const [number, setNumber] = useState(0);
// }
// export const Number = number;

import { createStore } from "redux";
const userData = { number: 0, company: "" };
function reducer(state = userData) {
  state.number = 1234567890;
  return state;
}

export const UserData = userData;
export const store = createStore(reducer);
