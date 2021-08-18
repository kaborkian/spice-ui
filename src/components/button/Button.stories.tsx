import React from "react";
import makeCollage from "../collage/Collage";
// import makeTest from "../collage/Collage";
import Button from "./Button";

const catagories = [
  [
    // colors
    "btn-outline-primary",
    "btn-secondary",
    "btn-success",
    "btn-danger",
    "btn-warning",
    "btn-special",
    "btn-disabled",
  ],
  [
    // shapes
    "sharp",
    "rounded",
    "pill",
  ],
  ["outline", ""]
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
