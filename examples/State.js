// const sournce = 'https://codesandbox.io/s/github/btholt/react-hooks-examples-v3/tree/master/?file=/src/Reducer.js';

import { useState } from "react";

const StateComponent = () => {
  const [isGreen, setIsGreen] = useState(true);

  return (
    <h1
      onClick={() => setIsGreen(!isGreen)}
      style={{ color: isGreen ? "limegreen" : "crimson" }}
    >
      useState Example
    </h1>
  );
};

export default StateComponent;
