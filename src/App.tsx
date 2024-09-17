import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import TestCounter1 from './components/TestCounter1';
import TestCounter2 from './components/TestCounter2';
import TestCounter3 from './components/TestCounter3';
import { incrementCounter } from './slices/counterSlice';
import Users from './components/Users';


function App() {

  //get counter slice from state
  let {counter}=useSelector(state=>state.counter)
  let dispatch=useDispatch();
 

  function increment(){
    //call action creator function to get action object
    const action=incrementCounter()
    //dispatch action object
    dispatch(action)
  }

  return (
    <div className='container text-center'>
      <h1 className="display-1 text-center">Root</h1>
      <h2>Counter : {counter}</h2>
      <button className="btn btn-success" onClick={increment}>Increment</button>
      {/* nest components */}
      <div className="d-flex justify-content-around mt-5">
      <TestCounter1 />
      <TestCounter2 />
      <TestCounter3 />
      
      </div>

      <Users />
     
    </div>
  )
}

export default App