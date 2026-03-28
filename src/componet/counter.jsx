import React from "react";
export default function Counter() {
  const [count, setCount] = React.useState(0);

  let add = () => {
    setCount(count + 1);}

    let sub = () => {
      setCount(count - 1);
    }   


  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={add} className="border p-2 bg-blue-500 text-white">add</button>

      <button onClick={sub} className="border p-2 bg-red-500 text-white">sub</button>
      
    </div>
  );
}
