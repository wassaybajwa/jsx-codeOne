import React from "react";
import ReactDOM from "react-dom";

const fname = "Wassay";
const lname = "Bajwa";
const currentDate = new Date();
const year = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <p>
      This Website is created by {fname} {lname}
    </p>
    <p>Copyrights {year}</p>
  </div>,
  document.getElementById("root")
);

//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
