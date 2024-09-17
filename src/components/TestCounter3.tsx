import React from "react";
import { useSelector ,useDispatch} from "react-redux";

function TestCounter3() {
  const { counter } = useSelector((state) => state.counter);
  
  return (
    <div>
     
      <h1>TestCounter1</h1>
      <h2>Counter : {counter}</h2>
    </div>
  );
}

export default TestCounter3;
