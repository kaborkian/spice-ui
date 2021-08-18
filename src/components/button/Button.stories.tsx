import React from "react";
import makeCollage from "../collage/Collage";
// import makeTest from "../collage/Collage";
import Button from "./Button";

const catagories = [
  [
    // colors
    "btn-primary",
    "btn-secondary",
    "btn-success-outline",
    "btn-danger-outline",
    // "warning",
    "special-outline",
    // "disabled",
    "wildcard-outline",
    "sunset-grad",
  ],
  [
    // shapes
    "sharp",
    "rounded",
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
