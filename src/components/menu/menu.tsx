import React, { useState, SetStateAction, useEffect } from "react";
import { Button } from "office-ui-fabric-react";
import "./menu.css";
import List from "./list";

const Menu: React.FC = () => {
  const [timer, setTimer] = useState({ seconds: 0 });

  const [list, setList] = useState({
    numbers: Array.from({ length: 40 }, () => Math.floor(Math.random() * 40))
  });

  // Hvorfor unmounter den, den efter den har kørt en gang?
  useEffect(() => {
    function time() {
      setTimer({ seconds: timer.seconds++ });
      console.log(timer);
    }

    setInterval(time, 1000, timer.seconds);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    function bubblesort() {
      const length = list.numbers.length;
      for (let i = 1; i < length; i++) {
        if (list.numbers[i - 1] > list.numbers[i]) {
          let temp = list.numbers[i - 1];
          list.numbers[i - 1] = list.numbers[i];
          list.numbers[i] = temp;
          setList({ numbers: list.numbers });
          break;
        }
      }
    }
    setInterval(bubblesort, 200, list);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="scrollmenu">
      <p>Timer: {timer.seconds}</p>
      <Button>Bubblesort</Button>
      <Button>Quicksort</Button>
      <Button>Mergesort</Button>
      <Button onClick={() => {}}>Start sort</Button>

      <List numbers={list.numbers} />
    </div>
  );
};

function BubbleSort(
  numbersState: number[],
  setNumbers: React.Dispatch<SetStateAction<number[]>>
) {
  console.log(numbersState);
  const numbers = numbersState.slice();
  const length = numbers.length;
  for (let i = 1; i < length; i++) {
    if (numbers[i - 1] > numbers[i]) {
      let temp = numbers[i - 1];
      numbers[i - 1] = numbers[i];
      numbers[i] = temp;
      setNumbers(numbers);
    }
  }
}

export default Menu;
