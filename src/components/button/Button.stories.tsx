import React from "react";
import makeCollage from "../collage/Collage";
import Button from "./Button";

const cartesian = (a: any) =>
  a.reduce((a: any, b: any) =>
    a.flatMap((d: any) => b.map((e: any) => [d, e].flat()))
  );

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
let combinations = cartesian(catagories);
export default {
  title: "Button",
};

export const test = () => makeCollage(Button, catagories);

export const collage = () => (
  <div>
    {combinations.map((comb: [], id: number) => (
      <Button
        key={id}
        text={comb.join(" ")}
        class_name={comb.join(" ")}
      ></Button>
    ))}
  </div>
);

export const primary = () => (
  <Button text="Primary" class_name="primary rounded" />
);
export const secondary = () => (
  <Button text="Secondary" class_name="secondary" />
);
export const success = () => <Button text="Success" class_name="success" />;
export const danger = () => <Button text="Danger" class_name="danger" />;
export const highlight = () => (
  <Button text="Highlight" class_name="highlight" />
);
export const special = () => <Button text="Special" class_name="special" />;
export const disabled = () => <Button text="Disabled" class_name="disabled" />;
