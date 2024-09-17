import { useSelector,useDispatch } from "react-redux";
import { decrementCounter } from "../slices/counterSlice";

function TestCounter1() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch=useDispatch();

  function decrement(){
    //create action obj
    let action=decrementCounter()
    //dispacth action obj
    dispatch(action)
  }

  return (
    <div>
      <h1>TestCounter1</h1>
      <h2>Counter : {counter}</h2>
      <button className="btn btn-danger" onClick={decrement}>decrement</button>
    </div>
  );
}

export default TestCounter1;
