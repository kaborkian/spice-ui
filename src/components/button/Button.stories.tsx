import React from "react";
import makeCollage from "../collage/Collage";
// import makeTest from "../collage/Collage";
import Button from "./Button";

const catagories = [
  [
    // colors
    "primary",
    "secondary",
    "success",
    "danger",
    "highlight",
    "special",
    "disabled",
  ],
  [
    // shapes
    "sharp",
    "rounded",
    "pill",
  ],
  //borders
  ["solid", "dashed"],
];

export default {
  title: "Button",
};
export const Collage = () =>
  makeCollage(Button, catagories, "class_name", "children");

const catagoriesPlus = {
  class_name: [
    ["primary", "secondary"],
    ["rounded", "pill"],
  ],
};
