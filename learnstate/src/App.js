import React, { useState } from "react";
import Counter from "./Counter";

export default function App() {
  const [name, setName] = useState("Neha");

  const handleClick = () => {
    setName("Akash");
  };

  return (
    <div>
      <h1>Hello {name}</h1>
      <button onClick={handleClick}>Click</button>
      <Counter />
    </div>
  );
}
