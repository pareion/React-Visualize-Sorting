import React, { useEffect, useState } from "react";
import ListItem from "./listItem";
import "./list.css";

interface IList {
  numbers: number[];
}

const List: React.FC<IList> = props => {
  const [state, setState] = useState(props.numbers);
  let windowWidth = window.screen.width;

  useEffect(() => {
    setState(props.numbers);
  }, [props.numbers]);
  return (
    <>
      {state.map((item, index) => (
        <ListItem
          elementsInList={windowWidth / props.numbers.length - 3}
          key={index}
          number={item}
        />
      ))}
    </>
  );
};

export default List;
