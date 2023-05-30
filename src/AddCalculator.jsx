import React, { useState } from "react";

export const AddCalculator = () => {
  let [add1, setAdd1] = useState(0);
  let [add2, setAdd2] = useState(0);
  let [add3, setAdd3] = useState(0);

  const onHandleClick = (calculation) => {
    switch (calculation) {
      case "Add 1":
        setAdd1(add1 + 1);
        break;
      case "Add 2":
        setAdd2(add2 + 2);
        break;
      case "Add 3":
        setAdd3(add3 + 3);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <button onClick={() => onHandleClick("Add 1")}>Add 1</button>
      <button onClick={() => onHandleClick("Add 2")}>Add 2</button>
      <button onClick={() => onHandleClick("Add 3")}>Add 3</button>
      <br />
      TOTAL: {add1 + add2 + add3}
      <br />
    </div>
  );
};
