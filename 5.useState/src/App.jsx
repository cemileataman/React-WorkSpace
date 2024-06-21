import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("hello"); //string değer
  const [lastName, setLastName] = useState("World");
  const [names, setNames] = useState(["Enes", "Adem", "Yakup", "Ali"]); //array
  const [userInfo, setUserInfo] = useState({
    username: "ebayram",
    password: "1212",
  }); //obje
  const [show, setShow] = useState(true);
  // console.log(names);

  const [count, setCount] = useState(0);

  const arttir = () => {
    setCount(count + 1);
  };

  const azalt = () =>{
    if()
    setCount(count-1)
  }

  console.log("component render edildi");

  //fonksiyon tanımla
  // const handleChange = () =>{
  //   setFirstName("Ayşenur");
  // }
  //useState :Bir state in değerini set methodunu kullanarak değiştirdiğinde component yeniden render edilir.

  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={arttir}>Arttır</button>
        <button onClick={azalt}>Azalt</button>
      </div>
      {/*     
    {show ? <div>{userInfo.username} {userInfo.password}</div> : <div>bilgileri gösterme</div> } */}

      {/* {userInfo.username} {userInfo.password} */}

      {/* {names.map((name,index)=>
    <div key={index}>{name}</div> */}
      {/* )} */}

      {/* <div><button onClick={()=>{setFirstName("Ayşenur")}}>İsmi Değiştir</button></div> */}
      {/* <div><button onClick={handleChange}>İsmi Değiştir</button></div> */}
    </div>
  );
}

export default App;
