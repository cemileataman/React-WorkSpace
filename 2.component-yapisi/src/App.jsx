import "./App.css";
import Hello from "./Hello";
import Login from "./Login";
import {users} from './Login'

function App() {
  console.log(users);
  return (
    <div>
     {/* <Login/> */}
     <Hello/>
    </div>
  );
}

export default App;
