import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({onChangeColor, childColor}) {

  return <div onClick={() => onChangeColor(getRandomColor())} className="child" style={{ backgroundColor: childColor }} />;
}

export default Child;

