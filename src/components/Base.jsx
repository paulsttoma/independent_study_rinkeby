import React from "react";
import { Basestyle } from "./styles/Base.styles";
import Img1 from "../images/p1.png";
import Img2 from "../images/p2.png";

function Base() {

  return (
    <div>
      <Basestyle>
        <img className="p1" src={Img1} alt = "p1"/>
        <img className="p2" src={Img2} alt = "p2" />
      </Basestyle>
    </div>
  );
}

export default Base;
