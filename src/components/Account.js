import { useState } from "react";

export default function Account() {
  const [account, setAccount] = useState({ amount: 0 });
  const [value, setValue] = useState(0);

  function increment() {
    setAccount({ amount: account.amount + 1 });
  }
  function decrement() {
    setAccount({ amount: account.amount - 1 });
  }
  function incrementByAmount(value) {
    setAccount({ amount: account.amount + value });
  }

  return (
    <div>
      <h4>Account component</h4>
      <h3>Amount : {account.amount}</h3>
      <button onClick={increment}>Increment +</button>
      <button onClick={decrement}>Decrement -</button>
      <input type="text" onChange={(e) => setValue(+e.target.value)} />
      <button onClick={() => incrementByAmount(value)}>
        Increment By {value}
      </button>
    </div>
  );
}
