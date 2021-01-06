/* eslint-disable react/prop-types */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./App.css";
import text from "./data";

function BoardV2(props) {
  // eslint-disable-next-line no-unused-vars
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const dMode = props.darkMode;
    console.log(props.darkMode);
    const box = document.getElementsByName("box");
    const boxes = document.getElementsByName("boxes");
    const gridItem = document.getElementsByClassName("grid-item");
    console.log(gridItem);
    if (dMode) {
      for (let x = 0; x < boxes.length; x++) {
        console.log(boxes[x].style.backgroundColor);
        boxes[x].style.backgroundColor = "black";
        boxes[x].style.color = "white";
        boxes[x].style.borderColor = "white";
        box[x].style.backgroundColor = "black";
        box[x].style.color = "white";
        box[x].style.borderColor = "black";
        gridItem[x].style.backgroundColor = "black";
        gridItem[x].style.borderColor = "white";
      }
    } else {
      for (let x = 0; x < boxes.length; x++) {
        console.log(boxes[x].style.backgroundColor);
        boxes[x].style.backgroundColor = "white";
        boxes[x].style.color = "black";
        boxes[x].style.borderColor = "black";
        box[x].style.backgroundColor = "white";
        box[x].style.color = "black";
        box[x].style.borderColor = "white";
        gridItem[x].style.backgroundColor = "white";
        gridItem[x].style.borderColor = "black";
      }
    }
    // eslint-disable-next-line react/destructuring-assignment
  }, [props.darkMode]);
  const checkAnswer = (ev) => {
    // eslint-disable-next-line no-console
    // eslint-disable-next-line react/prop-types
    if (props.answersShow) {
      console.log(ev.target.name);
      const ind = ev.target.id;
      const val = ev.target.value;
      console.log([val, text[1][ind]]);
      if (text[1][ind].toString() === val) {
        // eslint-disable-next-line no-console
        // eslint-disable-next-line no-param-reassign
        ev.target.style.color = "green";
        const ele = document.getElementsByName(ind);
        ele.color = "green";
        // eslint-disable-next-line no-param-reassign
      } else ev.target.style.color = "red";
    }
  };
  const PopulateBoard = () => {
    const arr = [];
    // eslint-disable-next-line no-plusplus
    for (let x = 0; x < 81; x++) {
      if (text[0][x] !== 0) {
        const comp = (
          <div key={x} name="boxes" className="grid-item">
            <input
              maxLength="1"
              name="box"
              style={{
                width: "40%",
                height: "50%",
                fontSize: "4vh",
                fontWeight: "bolder",
                color: "green",
              }}
              placeholder={text[0][x] !== 0 ? text[0][x] : "#"}
              readOnly="readonly"
            />
          </div>
        );
        arr.push(comp);
      }
      if (text[0][x] === 0) {
        const comp = (
          <div key={x} name="boxes" className="grid-item">
            <input
              maxLength="1"
              name="box"
              style={{ width: "40%", height: "50%", fontSize: "4vh" }}
              placeholder={text[0][x] !== 0 ? text[0][x] : ""}
              onChange={checkAnswer}
              id={x}
            />
          </div>
        );
        arr.push(comp);
      }
    }
    return arr;
  };

  return (
    <div id="grids-cont">
      <PopulateBoard />
    </div>
  );
}

export default BoardV2;
