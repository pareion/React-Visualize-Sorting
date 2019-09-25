import React, { useState } from "react";
import { Button, Label, Slider } from "office-ui-fabric-react";
import "./menu.css";
import List from "./list";

const Menu: React.FC = () => {
  const [started, setStarted] = useState(false);
  const [interval, setInter] = useState();
  const [listLength, setListLength] = useState(35);
  const [speed, setSpeed] = useState(250);

  const [list, setList] = useState({
    numbers: Array.from({ length: listLength }, () =>
      Math.floor(Math.random() * 40)
    )
  });

  const [algorithm, setAlgorithm] = useState("None");

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

  function startAlgorithm(algorithm: string) {
    if (!started) {
      setStarted(true);
      switch (algorithm) {
        case "Bubblesort": {
          setInter(setInterval(bubblesort, 500 - speed, list));
          break;
        }
        case "Quicksort": {
          break;
        }
        case "Mergesort": {
          break;
        }
        default:
          break;
      }
    }
  }

  return (
    <div className="scrollmenu">
      <Button
        onClick={() => {
          setAlgorithm("Bubblesort");
          clearTimeout(interval);
          setStarted(false);
        }}
      >
        Bubblesort
      </Button>
      <Button disabled>Quicksort</Button>
      <Button disabled>Mergesort</Button>
      <Button
        onClick={() => {
          startAlgorithm(algorithm);
        }}
      >
        Start
      </Button>
      <Button
        onClick={() => {
          clearTimeout(interval);
          setStarted(false);
        }}
      >
        Stop
      </Button>
      <Button
        onClick={() => {
          clearTimeout(interval);
          setList({
            numbers: Array.from({ length: listLength }, () =>
              Math.floor(Math.random() * 40)
            )
          });
          setStarted(false);
        }}
      >
        Restart
      </Button>
      <div style={{ width: 300 }}>
        <Slider
          label="Elementer"
          min={20}
          max={50}
          value={listLength}
          aria-labelledby="continuous-slider"
          disabled={started}
          onChange={newValue => {
            setListLength(newValue);
            setList({
              numbers: Array.from({ length: newValue }, () =>
                Math.floor(Math.random() * 40)
              )
            });
          }}
        />
      </div>
      <div style={{ width: 300 }}>
        <Slider
          label="Hastighed"
          min={0}
          max={500}
          valueFormat={value => `${value / 10}`}
          value={speed}
          aria-labelledby="continuous-slider"
          onChange={newValue => {
            setSpeed(newValue);
            if (started) {
              clearInterval(interval);
              setInter(setInterval(bubblesort, 500 - speed, list));
            }
          }}
          step={10}
        />
      </div>
      <Label>Algorithm: {algorithm}</Label>
      <List numbers={list.numbers} />
    </div>
  );
};

export default Menu;
