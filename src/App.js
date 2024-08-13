import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {incNumber, decNumber} from "./actions/index";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
<>
   <div class="container">
   <h1>Increment/Decrement counter</h1>
   <h4>using React and Redux</h4>
   <div className="quantity">
   <a className="quantity_minus" title='Decrement'>
   onClick={() =>dispatch(decNumber()) }<span> - </span></a>
   <input nameName='quantity' type='text' class="quantity_input" value={myState}/>
   <a className="quantity_plus" title='Increment'>
    onClick={ ()=>dispatch(incNumber())}<span> + </span></a>

   </div>

   </div>
</>
  );
}

export default App;
