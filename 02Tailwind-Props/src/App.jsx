import { useState } from "react";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        <h1 className="text-center text-7xl bg-green-500 h-20 pt-2">Tailwind</h1>
        <Card />
        <Card />
      </div>
    </>
  );
}

export default App;
