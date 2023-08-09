import "./App.css";
import Account from "./components/Account";
import Bonus from "./components/Bonus";

function App() {
  return (
    <div className="App">
      <h4>App</h4>
      <h3>Current amount : </h3>
      <h3>Bonus : </h3>
      <hr />
      <Account></Account>
      <hr />
      <Bonus></Bonus>
    </div>
  );
}

export default App;
