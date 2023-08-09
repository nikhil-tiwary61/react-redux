import { useState } from "react";

export default function Bonus() {
  const [bonus, setBonus] = useState({ points: 0 });
  function increment() {
    setBonus({ points: bonus.points + 1 });
  }
  return (
    <div>
      <h4>Bonus Component</h4>
      <h3>Bonus : {bonus.points}</h3>
      <button onClick={increment}>Increment +</button>
    </div>
  );
}
