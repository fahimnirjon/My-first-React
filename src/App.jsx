import './App.css'
import Counter from './counter';
import Users from './users';
import users from './users';

function App() {
 function buttonClick(){
  alert('button clicked');
 }

 const click2 = ()=>{
  alert('clicked');
 }
  return (
    <>
      <h2>React Core Concepts</h2>
      <Users></Users>
      <Counter></Counter>
        <button onClick={buttonClick}>click me</button>
        <button onClick={click2}>click me again</button>
        <button onClick={()=>{alert('3 is clicked')}}>Click3</button>
    </>
  )
}

export default App
