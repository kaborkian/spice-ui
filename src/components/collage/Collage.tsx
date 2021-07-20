/* 
'makeCollage' HOC takes as parameters a component and a 2d array of css class names.
The function will return a <div> element containing all possible combinations of the classes,
a.k.a a cartesian product with each catagory acting as a dimension
example:
const catagories = [
    ["blue", "red"], //colors
    ["small", "big"], //sizes
]
returns:
<div>
    <button className="blue small" />
    <button className="blue big" />
    <button className="red small" />
    <button className="red big" />
<div/>
*/

import React from "react";
const cartesian = (a: any) =>
  a.reduce((a: any, b: any) =>
    a.flatMap((d: any) => b.map((e: any) => [d, e].flat()))
  );

const makeCollage = (Comp: any, catagories: string[][]) => {
  const combinations = cartesian(catagories);
  return (
    <div>
      {combinations.map((comb: [], id: number) => (
        <Comp
          key={id}
          children={comb.join(" ")}
          class_name={comb.join(" ")}
        ></Comp>
      ))}
    </div>
  );
};

export default makeCollage;
