import React, { useEffect, useState } from "react";
import ListItem from "./listItem";
import "./list.css";

interface IList {
  numbers: number[];
}

const List: React.FC<IList> = props => {
  const [state, setState] = useState(props.numbers);
  console.log("list");
  useEffect(() => {
    setState(props.numbers);
    console.log("list");
  }, [props.numbers]);
  return (
    <>
      <ul>
        {state.map((item, index) => (
          <ListItem key={index} number={item} />
        ))}
      </ul>
    </>
  );
};

export default List;
