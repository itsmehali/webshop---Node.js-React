import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Spinner
      style={{
        width: "30px",
        height: "30px",
        margin: "auto",
        display: "block",
      }}
      role="status"
      animation="border"
    >
      <span className="spinner"></span>
    </Spinner>
  );
};

export default Loader;
