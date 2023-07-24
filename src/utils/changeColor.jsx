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

  return { color, handleClick }; // Return both the color and handleClick function
}
