import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import UserList from "./UserList";


// import { useSelector,useDispatch } from "react-redux";
// import { decrement, increment } from "./redux/counterSlice";



function App() {
  // const dispatch = useDispatch();
  // const { value } = useSelector((store) => store.counter); //store ın içerisinde counter diye bir slice var.o slice ı getir.slice in içindeki state gelir.
  // console.log(value);

  return (
    <div>
      {/* <div>{value}</div>
      <div>
        <button onClick={()=>dispatch(increment())}>Arttır</button>{/* dispatch ile fonksiyona eriştik. */}
      {/* <button onClick={()=>dispatch(decrement())}>Azalt</button>
      // </div> */}
      {/* <UserList/> */}




    </div>
  );
}

export default App;
