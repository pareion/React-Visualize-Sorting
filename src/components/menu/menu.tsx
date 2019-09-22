import React, { useState, SetStateAction } from "react";
import { Button } from "office-ui-fabric-react";
import "./menu.css";
import List from "./list";

const Menu: React.FC = () => {
  const [numbers, setNumbers] = useState(
    Array.from({ length: 40 }, () => Math.floor(Math.random() * 40))
  );

  return (
    <div className="scrollmenu">
      <Button>Bubblesort</Button>
      <Button>Quicksort</Button>
      <Button>Mergesort</Button>
      <Button
        onClick={() => {
          BubbleSort(numbers, setNumbers);
        }}
      >
        Start sort
      </Button>

      <List numbers={numbers} />
    </div>
  );
};

function BubbleSort(
  numbersState: number[],
  setNumbers: React.Dispatch<SetStateAction<number[]>>
) {
  const numbers = numbersState.slice();
  const length = numbers.length;
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 1; i < length; i++) {
      if (numbers[i - 1] > numbers[i]) {
        let temp = numbers[i - 1];
        numbers[i - 1] = numbers[i];
        numbers[i] = temp;
        swapped = true;
        setNumbers(numbers);
      }
    }
  }
  console.log(numbers);
}

export default Menu;
