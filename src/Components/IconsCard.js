import { Card } from "@material-ui/core";
import React from "react";

function IconsCard({ img, title }) {
  return (
    <div
      style={
        {
          /* margin: "20px 0px 20px 0px",
        padding: "15px 30px 15px 30px", */
        }
      }
    >
      <img
        style={{
          borderRadius: 100,
          maxHeight: 90,
          maxWidth: 100,
          marginRight: "auto",
          marginLeft: "auto",
        }}
        src={img}
      />
      <h3 style={{ marginRight: "auto", marginLeft: "auto" }}> {title} </h3>
    </div>
  );
}

export default IconsCard;
