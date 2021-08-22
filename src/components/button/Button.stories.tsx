import React from "react";
import makeCollage from "../collage/Collage";
// import makeTest from "../collage/Collage";
import Button from "./Button";

const catagories = [
  [
    // colors
    // "success",
    "danger",
    // "special",
    // "danger outline neon",
    // "special outline neon",
    // "special-outline",
    // "disabled",
    // "wildcard-outline",
    // "sunset-grad",
  ],
  ["", "outline"],
  ["", "neon"],
  [
    // shapes
    // "sharp",
    // "rounded",
    "pill",
  ],
  //bordrers
  // ["solid", "dashed"],
];

export default {
  title: "Button",
};
export const Collage = () =>
  makeCollage(Button, catagories, "class_name", "children");
