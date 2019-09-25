import React from "react";
import "./listItem.css";

interface IListItem {
  elementsInList: number;
  number: number;
}

const ListItem: React.FC<IListItem> = props => {
  return (
    <>
      <li
        className="listitem"
        style={{
          height: setStyle(props.number),
          width: props.elementsInList
        }}
      >
        <p>{props.number}</p>
      </li>
    </>
  );
};

const setStyle = (num: number) => {
  const numb = num * 20;
  return numb;
};

export default ListItem;
