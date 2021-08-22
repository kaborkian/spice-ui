/* 
'makeCollage' HOC takes as parameters a component, a 2d array of prop value injects and the names of the props to inject.
The function will return a <div> element containing all possible combinations of the 2d array and inject each combination into  the props.
it's basically a cartesian product with each catagory acting as a dimension
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
usage:
makeCollage(Button, catagories, "class_name", "children");
*/

import React from "react";
function cartesian(a: any) {
  return a.reduce((a: any, b: any) =>
    a.flatMap((d: any) => b.map((e: any) => [d, e].flat()))
  );
}

function makeCollage(
  Comp: any,
  catagories: any[][],
  ...propNames: string[]
): any {
  const combinations = cartesian(catagories);
  let propValue: string;
  let inject: any = {};
  // let arr: {}[] = [{"class_name": "success pill solid"}]

  return (
    <div>
      {combinations.map((comb: [], id: number) => {
        propValue = comb.join(" ");
        for (let i = 0; i < propNames.length; i++) {
          inject[propNames[i]] = propValue;
        }
        return <Comp key={id} {...inject}></Comp>;
      })}
    </div>
  );
}

export default makeCollage;
