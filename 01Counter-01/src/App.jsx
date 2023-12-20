import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    counter += 1;
    if (counter >= 0 && counter <= 50) {
      setCounter(counter);
    }
  };

  const removeValue = () => {
    counter -= 1;
    if (counter > 0) {
      setCounter(counter);
    } else {
      setCounter(counter = 0);
    }
    console.log(counter);
  };

  return (
    <>
      <div className="head">
        <h1>Counting App</h1>
        <h2>Counting Value : {counter}</h2>

        <button className="btn" onClick={addValue}>
          Add Value
        </button>
        <br />
        <button className="btn" onClick={removeValue}>
          Remove Value
        </button>
      </div>
    </>
  );
}

export default App;
