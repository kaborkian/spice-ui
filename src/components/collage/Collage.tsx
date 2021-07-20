// import React from "react";

// interface Props {
//   component: any;
//   catagories: string[][];
// }

// const Collage: React.FC<Props> = (props) => {
//   const { component, catagories } = props;
//   return <div>{component}</div>;
// };
// export default Collage;

import React from "react";

const makeCollage = (Comp: any, catagories: string[][]) => {
  return (
    <div>
      <Comp text="hello" class_name="danger pill solid"></Comp>
    </div>
  );
};

export default makeCollage;
