import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increaseCounter } from "./State/actions";

function App() {
  const { counter } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseCounter(5));
  };

  return (
    <div className="App">
      My counter app
      <div>Counter value: {counter}</div>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
