import { useDebugValue, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    console.log("her zaman çalışır");
  });
  //veritabanından ürünleri getir ve listele.uygulama yavaş çalışır.sunucu kitlenir.
   //farklı aksiyonlarda da hep çalışır .kullanılması pek sağlıklı değil her zaman için.herhangi bir state değiştiğinde çalışır.

  useEffect(() => {
    console.log("component ilk render edildiğinde çalışır.");
    //veritabanından ürünleri getir ve listele
  }, []); //sadece bir kere çalış.

  useEffect(() => {
    console.log(
      "ilk render edildiğinde ve FİRSTNAME veya LASTNAME state değerlerinde  değişiklik olduğunda çalışır."
    );
  }, [firstName, [lastName]]); // first namede değişiklik olduğu için çalışır.

  // useEffect(() => {
  //   console.log(
  //     "ilk render edildiğinde ve LASTNAME state değeri değiştiğinde çalışır."
  //   );
  // }, [lastName]);

  return (
    <div>
      <div>
        <button onClick={() => setFirstName("enes")}>Adı Değiştir</button>
      </div>
      <div>
        <button onClick={() => setLastName("bayram")}>Soyismi Değiştir</button>
      </div>
    </div>
  );
}

export default App;
