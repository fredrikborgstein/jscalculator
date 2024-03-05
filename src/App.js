import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("0");

  const updateDisplay = (e) => {
    const operatorArray = ["+", "*", "/"];
    if (display === "0") {
      setDisplay(e.target.innerText);
    } else if (e.target.innerText === ".") {
      if (!display.includes(e.target.innerText)) {
        setDisplay(display + e.target.innerText);
      }
      // else if there has been an operator since the last decimal point, allow one more decimal point
      if (
        display.includes("+") ||
        display.includes("-") ||
        display.includes("*") ||
        display.includes("/")
      ) {
        const lastOperatorIndex = Math.max(
          display.lastIndexOf("+"),
          display.lastIndexOf("-"),
          display.lastIndexOf("*"),
          display.lastIndexOf("/")
        );
        const decimalAfterOperator = display
          .slice(lastOperatorIndex)
          .includes(".");
        if (!decimalAfterOperator) {
          setDisplay(display + e.target.innerText);
        }
      }
    } else if (
      display[display.length - 1] === "-" &&
      operatorArray.includes(display[display.length - 2]) &&
      operatorArray.includes(e.target.innerText)
    ) {
      setDisplay(display.slice(0, -2) + e.target.innerText);
    } else if (
      operatorArray.includes(display[display.length - 1]) &&
      operatorArray.includes(e.target.innerText)
    ) {
      setDisplay(display.slice(0, -1) + e.target.innerText);
    } else {
      setDisplay(display + e.target.innerText);
    }

    if (e.target.innerText === "AC") {
      setDisplay("0");
    } else if (e.target.innerText === "=") {
      setDisplay(eval(display));
    }

    if (e.target.innerText === ".") {
      if (!display.includes(e.target.innerText)) {
        setDisplay(display + e.target.innerText);
      } else {
        return;
      }
    }
  };

  return (
    <Container
      style={{
        backgroundColor: "lightgrey",
        padding: "40px 50px",
        maxWidth: "320px",
      }}
    >
      <Container id="display-container" style={{ backgroundColor: "black" }}>
        <p
          id="display"
          className="mt-2 text-center"
          style={{ fontSize: "1.5rem", color: "white" }}
        >
          {display}
        </p>
      </Container>
      <Container id="row-1">
        <Button
          style={{ padding: "6px 35px", fontSize: "1.5rem" }}
          id="clear"
          onClick={updateDisplay}
          className="operator"
          variant="outline-secondary"
        >
          AC
        </Button>

        <Button
          style={{ padding: "6px 15px", fontSize: "1.5rem" }}
          id="divide"
          variant="outline-secondary"
          onClick={updateDisplay}
          className="operator"
        >
          /
        </Button>

        <Button
          onClick={updateDisplay}
          style={{ padding: "6px 15px", fontSize: "1.5rem" }}
          id="multiply"
          className="operator"
          variant="outline-secondary"
        >
          *
        </Button>
      </Container>
      <Container id="row-2">
        <Button
          onClick={updateDisplay}
          style={{ padding: "6px 15px", fontSize: "1.5rem" }}
          id="seven"
          className="number"
          variant="outline-secondary"
        >
          7
        </Button>

        <Button
          onClick={updateDisplay}
          style={{ padding: "6px 15px", fontSize: "1.5rem" }}
          id="eight"
          className="number"
          variant="outline-secondary"
        >
          8
        </Button>

        <Button
          onClick={updateDisplay}
          style={{ padding: "6px 15px", fontSize: "1.5rem" }}
          id="nine"
          className="number"
          variant="outline-secondary"
        >
          9
        </Button>

        <Button
          onClick={updateDisplay}
          style={{ padding: "6px 19px", fontSize: "1.5rem" }}
          id="subtract"
          className="operator"
          variant="outline-secondary"
        >
          -
        </Button>
      </Container>
      <Container id="row-3">
        <Button
          onClick={updateDisplay}
          style={{ padding: "6px 15px", fontSize: "1.5rem" }}
          id="four"
          className="number"
          variant="outline-secondary"
        >
          4
        </Button>

        <Button
          onClick={updateDisplay}
          style={{ padding: "6px 15px", fontSize: "1.5rem" }}
          id="five"
          className="number"
          variant="outline-secondary"
        >
          5
        </Button>

        <Button
          onClick={updateDisplay}
          style={{ padding: "6px 15px", fontSize: "1.5rem" }}
          id="six"
          className="number"
          variant="outline-secondary"
        >
          6
        </Button>

        <Button
          onClick={updateDisplay}
          style={{ padding: "6px 15px", fontSize: "1.5rem" }}
          id="add"
          className="operator"
          variant="outline-secondary"
        >
          +
        </Button>
      </Container>
      <Container id="row-4">
        <Button
          onClick={updateDisplay}
          style={{ padding: "6px 15px", fontSize: "1.5rem" }}
          id="one"
          className="number"
          variant="outline-secondary"
        >
          1
        </Button>

        <Button
          onClick={updateDisplay}
          style={{ padding: "6px 15px", fontSize: "1.5rem" }}
          id="two"
          className="number"
          variant="outline-secondary"
        >
          2
        </Button>

        <Button
          onClick={updateDisplay}
          style={{ padding: "6px 15px", fontSize: "1.5rem" }}
          id="three"
          className="number"
          variant="outline-secondary"
        >
          3
        </Button>

        <Button
          onClick={updateDisplay}
          style={{ padding: "6px 15px", fontSize: "1.5rem" }}
          id="equals"
          className="operator"
          variant="outline-secondary"
        >
          =
        </Button>
      </Container>
      <Container id="row-5">
        <Button
          onClick={updateDisplay}
          style={{ padding: "6px 55px", fontSize: "1.5rem" }}
          id="zero"
          className="number"
          variant="outline-secondary"
        >
          0
        </Button>

        <Button
          onClick={updateDisplay}
          style={{ padding: "6px 25px", fontSize: "1.5rem" }}
          id="decimal"
          className="operator"
          variant="outline-secondary"
        >
          .
        </Button>
      </Container>
    </Container>
  );
}

export default App;
