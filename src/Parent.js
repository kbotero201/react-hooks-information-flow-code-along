import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childColor, setChildColor] = useState("#FFF");

  function handleClickColorChange(){
    setColor(getRandomColor())
    setChildColor(getRandomColor())
  }



  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor= {handleClickColorChange} childColor={childColor}/>
      <Child onChangeColor= {handleClickColorChange} childColor={childColor}/>
    </div>
  );
}

export default Parent;
