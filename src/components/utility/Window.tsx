import { useState } from "react";

const WindowUtility = () => {
  const [state, setState] = useState();

  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  const height =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  setState({ width, height });

  return state;
};

export default WindowUtility;
