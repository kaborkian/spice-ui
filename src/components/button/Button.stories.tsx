import makeCollage from "../collage/Collage";
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
export const Collage = () => makeCollage(Button, catagories);
