import { useSelector, useDispatch } from "react-redux";
import { incrementBonus } from "../actions";

export default function Bonus() {
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();
  return (
    <div>
      <h4>Bonus Component</h4>
      <h3>Bonus : {points}</h3>
      <h3>Amount : {amount}</h3>
      <button onClick={() => dispatch(incrementBonus())}>Increment +</button>
    </div>
  );
}
