import { Card } from "@material-ui/core";
import React from "react";

function SpecialityCard({ img, title }) {
  return (
    <div
      style={{
        display: "flex",
        /* margin: "20px 0px 20px 0px",
        padding: "15px 30px 15px 30px", */
      }}
    >
      <img
        style={{
          minHeight: 50,
          minWidth: 30,
          margin: "auto",
          padding: 10,
        }}
        src={img}
      />
      <h3
        style={{
          marginRight: "10",
          marginLeft: "10",
          padding: 15,
          maxWidth: 200,
          wordWrap: "break",
        }}
      >
        {title}
      </h3>
    </div>
  );
}

export default SpecialityCard;
