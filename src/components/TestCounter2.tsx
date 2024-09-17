import { useSelector, useDispatch } from "react-redux";
import { incrementByValue } from "../slices/counterSlice";

function TestCounter2() {
  const { counter } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  function incrementagain() {
    //create action obj
    let action = incrementByValue(100);
    //dispacth action obj
    dispatch(action);
  }

  return (
    <div>
      <h1>TestCounter2</h1>
      <h2>Counter : {counter}</h2>
      <button className="btn btn-warning" onClick={incrementagain}>
        incement by a value
      </button>
    </div>
  );
}

export default TestCounter2;
