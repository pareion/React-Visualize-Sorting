import React, { useEffect, useState } from "react";
import ListItem from "./listItem";
import "./list.css";

interface IList {
  numbers: number[];
}

const List: React.FC<IList> = props => {
  const [state, setState] = useState(props.numbers);
  const [width, setWidth] = useState();

  window.addEventListener("resize", function() {
    setWidth(
      window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
    );
  });

  useEffect(() => {
    setState(props.numbers);
  }, [props.numbers]);
  return (
    <>
      {state.map((item, index) => (
        <ListItem
          elementsInList={width / props.numbers.length}
          key={index}
          number={item}
        />
      ))}
    </>
  );
};

export default List;
