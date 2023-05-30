import React, { useState } from "react";

export const NumberBuilder = () => {
    let [counter, setCounter] = useState(0);
    let [numbers, setNumbers] = useState(" ");

    const onHandleClick = () => {
        setCounter(++counter)
        setNumbers(numbers += (counter + " "))
      }
      const onHandleReset = () => {
        setNumbers(" ")
        setCounter(0)
      }

    return (
    <div className="Main">
        <button onClick={() => onHandleClick()}>Add Number</button>
        <button onClick={() => onHandleReset()}>Reset</button>
        <br></br>
        Numbers: {numbers}
    </div>
  )
}