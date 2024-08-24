import React, { useState } from "react";
import "./App.css";

import Block from "./components/Block";
import Button from "./components/Button";

function App() {
  const [state, setState] = useState(Array(9).fill(null));
  const [currentTurn, setcurrentTurn] = useState("X");
  function checkwinner(state: any[]) {
    const winArray = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winArray.length; i++) {
      const [a, b, c] = winArray[i];
      if (state[a] && state[a] === state[b] && state[a] === state[c]) {
        console.log("true");
        return true;
      }
      console.log(a, b, c, "false");
    }
    return false;
  }
  function alertWin(winner: string) {
    alert(`${currentTurn} won the game`);
  }

  function handleBlockClick(index: number) {
    if (state[index] != null) {
      return;
    }

    const stateCopy = Array.from(state);

    stateCopy[index] = currentTurn;
    //Check if someone won
    // setState(stateCopy);

    const win = checkwinner(stateCopy);
    setState(stateCopy);

    setcurrentTurn(currentTurn === "X" ? "O" : "X");

    if (win) {
      for (let i = 0; i < 9; i++) {
        if (stateCopy[i] === null) {
          stateCopy[i] = " ";
        }
      }
      setTimeout(() => {
        alertWin(currentTurn);
      }, 200);
    }
  }
  function reload() {
    window.location.reload();
  }

  return (
    <div>
      <div className="board">
        <div className="row">
          <Block onClick={() => handleBlockClick(0)} value={state[0]} />
          <Block onClick={() => handleBlockClick(1)} value={state[1]} />
          <Block onClick={() => handleBlockClick(2)} value={state[2]} />
        </div>
        <div className="row">
          <Block onClick={() => handleBlockClick(3)} value={state[3]} />
          <Block onClick={() => handleBlockClick(4)} value={state[4]} />
          <Block onClick={() => handleBlockClick(5)} value={state[5]} />
        </div>
        <div className="row">
          <Block onClick={() => handleBlockClick(6)} value={state[6]} />
          <Block onClick={() => handleBlockClick(7)} value={state[7]} />
          <Block onClick={() => handleBlockClick(8)} value={state[8]} />
        </div>
      </div>
      <Button onClick={() => reload()} />
    </div>
  );
}

export default App;
