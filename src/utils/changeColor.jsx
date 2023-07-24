import React, { useState } from 'react';

export function ChangeColor() {
  const [color, setColor] = useState("red");

  function handleClick() {
    if (color === "red") {
      setColor("blue");
    } else {
      setColor("pink");
    }
  };
  //NEW PLAY FEATURE TEST

  return { color, handleClick }; // Return both the color and handleClick function
}
