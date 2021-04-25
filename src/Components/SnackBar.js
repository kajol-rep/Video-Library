import React from "react";
import { useEffect } from "react";
import { useData } from "../Context/DataProvider";

export function Snackbar() {
  const {
    state: { snackbarText },
    dispatch
  } = useData();
  useEffect(() => {
    const timerId = setTimeout(() => {
      dispatch({ type: "CLOSE_SNACKBAR", payload: null });
      clearInterval(timerId);
    }, 2000);
  });
  return (
    <>
      {" "}
      <div className="snackbar">{snackbarText}</div>
    </>
  );
}
