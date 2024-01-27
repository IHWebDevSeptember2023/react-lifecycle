// src/components/01-use-state/Counter.jsx

import { useState, useEffect } from "react";
import PokeList from "./components/PokeList";
import PokeAxios from "./components/PokeAxios";
import DinamicComponent from "./components/DinamicComponent";

function Counter() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  console.log("El componente está actualizado");

  useEffect(() => {
    console.log("Código dentro del useEffect");
    /*   setInterval(() => {
        setCount((prevCount) => prevCount + 1); // necesitamos el valor anterior para que funcione. Solamente con count +1 tendremos únicamente el valor inicial de count  0 +1
      }, 1000); */
  }, [])
  /* 
  ESTO CREA UN ERROR. El componente se actualiza múltiples veces causando un ciclo infinito de setintervals (creamos tantos intervalos como veces se actualiza el estado)
  setInterval(() => {
     setCount(count + 1);
   }, 1000); 
   */

  return (
    <div className="Counter">
      <h2>Counter</h2>

      <p>You clicked {count} times</p>
      {
        count < 5 && <DinamicComponent />
      }
      <button onClick={() => setCount(count - 1)}> - </button>
      <button onClick={() => setCount(count + 1)}> + </button>
      <p>Count 2</p>
      <p>You clicked count2 {count2} times</p>
      <button onClick={() => setCount2(count2 - 1)}> - </button>
      <button onClick={() => setCount2(count2 + 1)}> + </button>
      {/* <PokeList /> */}
      <PokeAxios />
    </div>
  );
}

export default Counter;
