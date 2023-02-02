import React from "react";
import { ArrowLeftShort } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function Back() {
  return (
    <div>
      <Link to="/">
        <ArrowLeftShort
          height={40}
          width={80}
          color="white"
          style={{
            position: "fixed",
            left: "0",
            top: "30px",
            zIndex: 10,
            border: "5px solid black",
            backgroundColor: "black",
          }}
        />
      </Link>
    </div>
  );
}

export default Back;
