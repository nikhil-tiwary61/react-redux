import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "../actions";

export default function Account() {
  const [value, setValue] = useState(0);
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();

  return (
    <div>
      <h4>Account component</h4>
      <h3>Amount : {amount}</h3>
      <h3>Points : {points}</h3>
      <button onClick={() => dispatch(increment)}>Increment +</button>
      <button onClick={() => dispatch(decrement)}>Decrement -</button>
      <input type="text" onChange={(e) => setValue(+e.target.value)} />
      <button onClick={() => dispatch(incrementByAmount(value))}>
        Increment By {value}
      </button>
    </div>
  );
}
