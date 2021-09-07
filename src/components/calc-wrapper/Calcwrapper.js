import React, { useState } from "react";
import Button from "../button/Button";
import Input from "../input/Input";
import "./Calcwrapper.css";
import { evaluate } from "mathjs";

function Calcwrapper() {
  const [result, setResult] = useState("");
  const [text, setText] = useState("");

  const addToText = (val) => {
      setText(text + val)
   
  };

  const clearDisplay = () => {
    setResult("");
    setText("");
  };

  const calculateResult = () => {
    setResult(evaluate(text));
  };

  const removeLastdigit = () => {
    const newText = text.slice(0, -1);
    setText(newText);
  };

  return (
    <div className="calc-wrapper">
      <Input result={result} text={text} />
      <div className="buttons-wrapper">
        <Button className="span-two" handelClick={clearDisplay} value="AC">
          AC
        </Button>
        <Button value="DEL" handelClick={removeLastdigit}>
          DEL
        </Button>
        <Button value="/" handelClick={addToText}>
          /
        </Button>
        <Button value="1" handelClick={addToText}>
          1
        </Button>
        <Button value="2" handelClick={addToText}>
          2
        </Button>
        <Button value="3" handelClick={addToText}>
          3
        </Button>
        <Button value="*" handelClick={addToText}>
          *
        </Button>
        <Button value="4" handelClick={addToText}>
          4
        </Button>
        <Button value="5" handelClick={addToText}>
          5
        </Button>
        <Button value="6" handelClick={addToText}>
          6
        </Button>
        <Button value="+" handelClick={addToText}>
          +
        </Button>
        <Button value="7" handelClick={addToText}>
          7
        </Button>
        <Button value="8" handelClick={addToText}>
          8
        </Button>
        <Button value="9" handelClick={addToText}>
          9
        </Button>
        <Button value="-" handelClick={addToText}>
          -
        </Button>
        <Button value="." handelClick={addToText}>
          .
        </Button>
        <Button value="0" handelClick={addToText}>
          0
        </Button>
        <Button value="=" className="span-two" handelClick={calculateResult}>
          =
        </Button>
        
      </div>
    </div>
  );
}

export default Calcwrapper;
